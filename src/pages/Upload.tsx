import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import { Heart, Upload as UploadIcon, FileSpreadsheet, Activity, User, Calendar } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Upload = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [uploadMethod, setUploadMethod] = useState<"form" | "csv">("form");
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate prediction processing
    setTimeout(() => {
      setIsLoading(false);
      toast({
        title: "Analysis complete!",
        description: "Patient data processed successfully. Redirecting to results...",
      });
      navigate("/results");
    }, 3000);
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
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Heart Failure Risk Prediction</h1>
            <p className="text-xl text-muted-foreground">
              Upload patient data to get AI-powered risk assessment and explainable insights
            </p>
          </div>

          {/* Method Selection */}
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                uploadMethod === "form" 
                  ? "ring-2 ring-primary medical-shadow" 
                  : "hover:shadow-lg"
              }`}
              onClick={() => setUploadMethod("form")}
            >
              <CardContent className="p-6 text-center">
                <User className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Single Patient Form</h3>
                <p className="text-muted-foreground">Enter individual patient data manually</p>
              </CardContent>
            </Card>

            <Card 
              className={`cursor-pointer transition-all duration-300 ${
                uploadMethod === "csv" 
                  ? "ring-2 ring-primary medical-shadow" 
                  : "hover:shadow-lg"
              }`}
              onClick={() => setUploadMethod("csv")}
            >
              <CardContent className="p-6 text-center">
                <FileSpreadsheet className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Bulk CSV Upload</h3>
                <p className="text-muted-foreground">Upload multiple patients via CSV file</p>
              </CardContent>
            </Card>
          </div>

          {/* Form Content */}
          <Card className="glass-card medical-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5" />
                {uploadMethod === "form" ? "Patient Information" : "CSV File Upload"}
              </CardTitle>
              <CardDescription>
                {uploadMethod === "form" 
                  ? "Please fill in all required patient data fields for accurate prediction"
                  : "Upload a CSV file containing patient data for batch processing"
                }
              </CardDescription>
            </CardHeader>

            <CardContent>
              {uploadMethod === "form" ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Basic Information */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Basic Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="age">Age</Label>
                        <Input
                          id="age"
                          type="number"
                          placeholder="65"
                          min="0"
                          max="120"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="sex">Sex</Label>
                        <Select required>
                          <SelectTrigger>
                            <SelectValue placeholder="Select sex" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="male">Male</SelectItem>
                            <SelectItem value="female">Female</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Vital Signs */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                      <Activity className="h-4 w-4" />
                      Vital Signs & Lab Results
                    </h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="bp">Blood Pressure (Systolic)</Label>
                        <Input
                          id="bp"
                          type="number"
                          placeholder="140"
                          min="60"
                          max="250"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="cholesterol">Cholesterol (mg/dL)</Label>
                        <Input
                          id="cholesterol"
                          type="number"
                          placeholder="220"
                          min="100"
                          max="500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="thalach">Max Heart Rate (Thalach)</Label>
                        <Input
                          id="thalach"
                          type="number"
                          placeholder="150"
                          min="60"
                          max="220"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="ejectionFraction">Ejection Fraction (%)</Label>
                        <Input
                          id="ejectionFraction"
                          type="number"
                          placeholder="45"
                          min="10"
                          max="80"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <Separator />

                  {/* Medical History */}
                  <div>
                    <h3 className="text-lg font-semibold mb-4">Medical History</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="diabetes" />
                          <Label htmlFor="diabetes" className="text-sm font-normal">
                            Diabetes
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="smoking" />
                          <Label htmlFor="smoking" className="text-sm font-normal">
                            Current or Former Smoker
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="anemia" />
                          <Label htmlFor="anemia" className="text-sm font-normal">
                            Anemia
                          </Label>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                          <Checkbox id="hypertension" />
                          <Label htmlFor="hypertension" className="text-sm font-normal">
                            High Blood Pressure
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="kidneyDisease" />
                          <Label htmlFor="kidneyDisease" className="text-sm font-normal">
                            Kidney Disease
                          </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox id="previousMI" />
                          <Label htmlFor="previousMI" className="text-sm font-normal">
                            Previous Heart Attack
                          </Label>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button 
                      type="submit" 
                      className="flex-1 h-12 medical-gradient text-white border-0 text-base"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center">
                          <Heart className="mr-2 h-4 w-4 heartbeat" />
                          Analyzing patient data with AI...
                        </div>
                      ) : (
                        <div className="flex items-center">
                          <Activity className="mr-2 h-4 w-4" />
                          Predict Heart Failure Risk
                        </div>
                      )}
                    </Button>
                  </div>
                </form>
              ) : (
                <div className="space-y-6">
                  <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                    <UploadIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h4 className="text-lg font-semibold mb-2">Upload CSV File</h4>
                    <p className="text-muted-foreground mb-4">
                      Select a CSV file containing patient data
                    </p>
                    <Button variant="outline">
                      <UploadIcon className="mr-2 h-4 w-4" />
                      Choose File
                    </Button>
                  </div>

                  <div className="bg-muted/50 rounded-lg p-4">
                    <h5 className="font-medium mb-2">CSV Format Requirements:</h5>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Include columns: age, sex, bp, cholesterol, thalach, ejection_fraction</li>
                      <li>• Boolean columns: diabetes, smoking, anemia, hypertension, kidney_disease</li>
                      <li>• Maximum 1000 patients per file</li>
                      <li>• File size limit: 5MB</li>
                    </ul>
                  </div>

                  <Button className="w-full h-12 medical-gradient text-white border-0">
                    Process CSV File
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;