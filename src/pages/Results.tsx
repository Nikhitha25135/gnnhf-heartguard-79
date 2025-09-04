import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Heart, Download, RotateCcw, AlertTriangle, CheckCircle, Info, TrendingUp, TrendingDown } from "lucide-react";
import { Link } from "react-router-dom";

const Results = () => {
  // Mock prediction results
  const riskScore = 78;
  const riskLevel = riskScore >= 70 ? "high" : riskScore >= 40 ? "medium" : "low";
  
  const riskFactors = [
    { feature: "Ejection Fraction", impact: -0.45, value: "32%", description: "Below normal range (50-70%)" },
    { feature: "Age", impact: 0.32, value: "68 years", description: "Higher age increases risk" },
    { feature: "Max Heart Rate", impact: -0.28, value: "95 bpm", description: "Lower than expected for age" },
    { feature: "Blood Pressure", impact: 0.25, value: "165/95 mmHg", description: "Elevated systolic pressure" },
    { feature: "Kidney Function", impact: 0.18, value: "Impaired", description: "Reduced creatinine clearance" },
    { feature: "Anemia", impact: 0.15, value: "Present", description: "Hemoglobin below normal" }
  ];

  const getRiskColor = (level: string) => {
    switch (level) {
      case "high": return "text-destructive";
      case "medium": return "text-warning";
      case "low": return "text-success";
      default: return "text-muted-foreground";
    }
  };

  const getRiskIcon = (level: string) => {
    switch (level) {
      case "high": return <AlertTriangle className="h-8 w-8" />;
      case "medium": return <Info className="h-8 w-8" />;
      case "low": return <CheckCircle className="h-8 w-8" />;
      default: return <Heart className="h-8 w-8" />;
    }
  };

  const getRiskBadgeVariant = (level: string) => {
    switch (level) {
      case "high": return "destructive";
      case "medium": return "secondary";
      case "low": return "secondary";
      default: return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="border-b bg-card">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold">GNN-HF</span>
          </Link>
          <div className="flex items-center gap-4">
            <span className="text-muted-foreground">Dr. Sarah Johnson</span>
            <Button variant="outline" size="sm">Logout</Button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header */}
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-4">Prediction Results</h1>
            <p className="text-xl text-muted-foreground">
              AI-powered heart failure risk assessment with explainable insights
            </p>
          </div>

          {/* Main Risk Assessment */}
          <Card className="glass-card medical-shadow">
            <CardHeader className="text-center pb-8">
              <CardTitle className="text-2xl mb-4">Heart Failure Risk Assessment</CardTitle>
              <div className={`flex flex-col items-center gap-4 ${getRiskColor(riskLevel)}`}>
                {getRiskIcon(riskLevel)}
                <div className="text-6xl font-bold">
                  {riskScore}%
                </div>
                <Badge variant={getRiskBadgeVariant(riskLevel)} className="text-lg px-4 py-1 capitalize">
                  {riskLevel} Risk
                </Badge>
              </div>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-muted-foreground">Risk Probability</span>
                    <span className="text-sm font-medium">{riskScore}%</span>
                  </div>
                  <Progress value={riskScore} className="h-3" />
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2 flex items-center gap-2">
                    <Info className="h-4 w-4" />
                    Clinical Interpretation
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {riskLevel === "high" && 
                      "This patient shows a high probability of heart failure. Immediate clinical evaluation and intervention are strongly recommended."
                    }
                    {riskLevel === "medium" && 
                      "This patient shows moderate risk factors. Regular monitoring and preventive measures are advised."
                    }
                    {riskLevel === "low" && 
                      "This patient shows low heart failure risk. Continue routine cardiac health monitoring."
                    }
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Explainable AI Insights */}
          <Card className="glass-card medical-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5" />
                Top Risk Factors Affecting Prediction
              </CardTitle>
              <CardDescription>
                SHAP values showing which factors contribute most to the risk assessment
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                {riskFactors.map((factor, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        {factor.impact > 0 ? (
                          <TrendingUp className="h-4 w-4 text-destructive" />
                        ) : (
                          <TrendingDown className="h-4 w-4 text-success" />
                        )}
                        <span className="font-medium">{factor.feature}</span>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-mono">
                          {factor.impact > 0 ? '+' : ''}{factor.impact.toFixed(2)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-muted-foreground">Patient Value:</span>
                      <span className="text-sm font-medium">{factor.value}</span>
                    </div>
                    
                    <div className="relative">
                      <div className="w-full bg-muted rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            factor.impact > 0 ? 'bg-destructive' : 'bg-success'
                          }`}
                          style={{ 
                            width: `${Math.abs(factor.impact) * 100}%`,
                            marginLeft: factor.impact > 0 ? '50%' : 'auto',
                            marginRight: factor.impact < 0 ? '50%' : 'auto'
                          }}
                        />
                      </div>
                      <div className="absolute top-0 left-1/2 w-0.5 h-2 bg-border transform -translate-x-0.5" />
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-2">{factor.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Clinical Recommendations */}
          <Card className="glass-card medical-shadow border-l-4 border-l-primary">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Heart className="h-5 w-5" />
                Clinical Recommendations
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="space-y-4">
                <div className="bg-primary/5 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Next Steps</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Consult with a cardiologist for comprehensive evaluation
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Consider echocardiogram to assess ejection fraction
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Review current medications and optimize heart failure therapy
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      Monitor kidney function and adjust medications as needed
                    </li>
                  </ul>
                </div>
                
                <div className="text-xs text-muted-foreground bg-muted/30 rounded-lg p-3">
                  <strong>Disclaimer:</strong> This AI-powered prediction is for informational purposes only and should not replace clinical judgment. Always consult with qualified healthcare professionals for diagnosis and treatment decisions.
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 h-12 medical-gradient text-white border-0">
              <Download className="mr-2 h-4 w-4" />
              Download Detailed Report (PDF)
            </Button>
            <Link to="/upload" className="flex-1">
              <Button variant="outline" className="w-full h-12">
                <RotateCcw className="mr-2 h-4 w-4" />
                New Prediction
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Results;