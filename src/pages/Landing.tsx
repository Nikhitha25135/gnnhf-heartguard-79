import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Shield, Zap, BarChart3, Upload, Brain, Activity, Users } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-medical-ai.jpg";

const Landing = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-card border-b border-white/20">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Heart className="h-8 w-8 text-primary heartbeat" />
            <span className="text-2xl font-bold">GNN-HF</span>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/login">
              <Button variant="ghost">Login</Button>
            </Link>
            <Link to="/signup">
              <Button className="medical-gradient text-white border-0">Get Started</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-white">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              Predict Heart Failure Risk
              <span className="block text-primary-glow">with AI</span>
            </h1>
            <p className="text-xl md:text-2xl mb-12 opacity-90 leading-relaxed">
              Upload patient data and get instant predictions with explainable insights 
              powered by advanced Graph Neural Networks.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/upload">
                <Button size="lg" className="medical-gradient text-white border-0 px-8 py-4 text-lg medical-shadow">
                  <Activity className="mr-2 h-5 w-5" />
                  Start Prediction
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="glass-card border-white/30 text-white hover:bg-white/20 px-8 py-4 text-lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* Floating elements */}
        <div className="absolute top-1/4 left-10 animate-pulse">
          <div className="w-4 h-4 bg-primary-glow rounded-full glow-shadow"></div>
        </div>
        <div className="absolute top-1/3 right-20 animate-pulse delay-300">
          <div className="w-6 h-6 bg-accent rounded-full glow-shadow"></div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">About GNN-HF</h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              GNN-HF leverages advanced Graph Neural Networks to identify heart failure risks by analyzing complex patient health data patterns. Our AI model provides accurate predictions with transparent, explainable insights for healthcare professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Shield className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Secure & HIPAA Compliant</h3>
                  <p className="text-muted-foreground">All patient data is encrypted and processed in compliance with healthcare regulations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Brain className="h-8 w-8 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">Explainable AI</h3>
                  <p className="text-muted-foreground">Understand which factors contribute most to the risk assessment with SHAP value analysis.</p>
                </div>
              </div>
            </div>
            
            <Card className="glass-card medical-shadow">
              <CardContent className="p-8">
                <div className="text-center">
                  <BarChart3 className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h4 className="text-2xl font-bold mb-2">94.7%</h4>
                  <p className="text-muted-foreground">Prediction Accuracy</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">How It Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Simple, fast, and accurate heart failure risk assessment in four easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Upload, title: "Upload Data", desc: "Input patient health information or upload CSV files" },
              { icon: Brain, title: "AI Analysis", desc: "Our GNN processes the data using advanced algorithms" },
              { icon: Activity, title: "Risk Assessment", desc: "Get instant heart failure probability scores" },
              { icon: Users, title: "Clinical Guidance", desc: "Receive actionable insights for patient care" }
            ].map((step, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 border-border/50">
                <CardContent className="p-0">
                  <div className="medical-gradient w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground">{step.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Key Features</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Shield, title: "Secure Upload", desc: "End-to-end encryption for all patient data" },
              { icon: Zap, title: "Fast Prediction", desc: "Get results in seconds, not minutes" },
              { icon: BarChart3, title: "Explainable AI", desc: "Understand risk factor contributions" },
              { icon: Activity, title: "Dashboard Insights", desc: "Comprehensive analytics and reporting" }
            ].map((feature, index) => (
              <Card key={index} className="glass-card p-6 text-center hover:medical-shadow transition-all duration-300">
                <CardContent className="p-0">
                  <feature.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 medical-gradient text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-12 opacity-90 max-w-2xl mx-auto">
            Join healthcare professionals already using GNN-HF for accurate heart failure risk assessment.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link to="/signup">
              <Button size="lg" variant="secondary" className="px-8 py-4 text-lg">
                Create Account
              </Button>
            </Link>
            <Link to="/upload">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-4 text-lg">
                Try Demo
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-card border-t">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center gap-2 mb-4 md:mb-0">
              <Heart className="h-6 w-6 text-primary" />
              <span className="text-lg font-semibold">GNN-HF</span>
            </div>
            <p className="text-muted-foreground text-center">
              © 2024 GNN-HF. AI-powered heart failure risk prediction. For informational purposes only.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;