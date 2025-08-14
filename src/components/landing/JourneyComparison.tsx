import { Clock, MapPin, IndianRupee, Zap, Shield, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const JourneyComparison = () => {
  return (
    <section className="py-14 md:py-20 bg-gradient-to-br from-primary/5 to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl mb-4">
            Your Daily Journey <span className="text-gradient">Reimagined</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From struggling with public transport to effortless point-to-point travel. 
            See how Zypdrive transforms your daily commute.
          </p>
        </div>

        {/* Journey Comparison */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Bus Journey - The Struggle */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-red-50 to-orange-50 border-red-200">
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-red-800 mb-2">The Daily Struggle</h3>
              <p className="text-red-600 text-sm">Traditional public transport journey</p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", action: "Walk to bus stop", time: "10-15 min", icon: "🚶‍♀️" },
                { step: "2", action: "Wait for first bus", time: "15-25 min", icon: "⏰" },
                { step: "3", action: "Crowded bus ride #1", time: "20-30 min", icon: "🚌" },
                { step: "4", action: "Change buses/wait", time: "10-20 min", icon: "🔄" },
                { step: "5", action: "Crowded bus ride #2", time: "15-25 min", icon: "🚌" },
                { step: "6", action: "Walk to destination", time: "10-15 min", icon: "🚶‍♀️" },
                { step: "7", action: "Repeat return journey", time: "+80-110 min", icon: "🔄" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white/60 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-red-800">{item.action}</div>
                    <div className="text-sm text-red-600">{item.time}</div>
                  </div>
                  <div className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded">
                    Step {item.step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-red-100 rounded-lg">
              <div className="text-center">
                <div className="font-bold text-red-800 text-lg">Total Daily Time: 2.5-3.5 hours</div>
                <div className="text-red-600 text-sm">Daily Cost: ₹50-60 | Monthly: ₹1,300-1,560</div>
                <div className="text-red-600 text-xs mt-1">+ Stress, Safety concerns, Weather dependency</div>
                <div className="text-red-600 text-xs mt-1">*Assumes 15-20 km daily commute in Udupi/Manipal region</div>
              </div>
            </div>
          </Card>

          {/* Scooter Journey - The Solution */}
          <Card className="p-6 md:p-8 bg-gradient-to-br from-green-50 to-emerald-50 border-green-200 relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-2 text-sm font-medium">
              Zypdrive Solution
            </div>
            
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-heading text-xl md:text-2xl text-green-800 mb-2">Point-to-Point Freedom</h3>
              <p className="text-green-600 text-sm">Electric scooter convenience</p>
            </div>

            <div className="space-y-4">
              {[
                { step: "1", action: "Pick up scooter", time: "1 min", icon: "🛵" },
                { step: "2", action: "Direct route to work", time: "15-20 min", icon: "🎯" },
                { step: "3", action: "Park at destination", time: "1 min", icon: "🅿️" },
                { step: "4", action: "Return journey", time: "15-20 min", icon: "🏠" },
                { step: "5", action: "Charge at home", time: "Overnight", icon: "🔌" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4 p-3 bg-white/60 rounded-lg">
                  <div className="text-2xl">{item.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-green-800">{item.action}</div>
                    <div className="text-sm text-green-600">{item.time}</div>
                  </div>
                  <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">
                    Step {item.step}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-green-100 rounded-lg">
              <div className="text-center">
                <div className="font-bold text-green-800 text-lg">Total Daily Time: 30-40 minutes</div>
                <div className="text-green-600 text-sm">Monthly Cost: ₹1,779-2,399 (All inclusive)</div>
                <div className="text-green-600 text-xs mt-1">+ Safety, Convenience, Weather protection</div>
                <div className="text-green-600 text-xs mt-1">*Assumes 15-20 km daily commute in Udupi/Manipal region</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Time & Money Savings */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <Card className="p-6 text-center bg-gradient-to-br from-blue-50 to-cyan-50">
            <Clock className="w-12 h-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-heading text-xl mb-2">Save 1.5-2 Hours Daily</h3>
            <p className="text-muted-foreground text-sm">That's 30-40 hours every month for what matters most to you</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-purple-50 to-pink-50">
            <IndianRupee className="w-12 h-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-heading text-xl mb-2">Predictable Costs</h3>
            <p className="text-muted-foreground text-sm">No surge pricing, no daily tickets. One fixed monthly payment</p>
          </Card>
          
          <Card className="p-6 text-center bg-gradient-to-br from-green-50 to-teal-50">
            <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-heading text-xl mb-2">Safety First</h3>
            <p className="text-muted-foreground text-sm">Well-maintained scooters, GPS tracking, and 24/7 support</p>
          </Card>
        </div>

        {/* Women Empowerment & Make in India */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="p-6 md:p-8 bg-gradient-to-br from-pink-50 to-rose-50 border-pink-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                <Heart className="w-8 h-8 text-pink-600" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-pink-800">Empowering Women</h3>
                <p className="text-pink-600 text-sm">Freedom, Safety, Independence</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-pink-700">
              <p>✨ Built specifically for working women's needs</p>
              <p>✨ Safe, reliable transportation at any hour</p>
              <p>✨ Financial independence through smart mobility</p>
              <p>✨ More time for career, family, and personal growth</p>
              <p>✨ Breaking barriers, one ride at a time</p>
            </div>
          </Card>

          <Card className="p-6 md:p-8 bg-gradient-to-br from-orange-50 to-amber-50 border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="font-heading text-xl md:text-2xl text-orange-800">Make in India</h3>
                <p className="text-orange-600 text-sm">Supporting Local Innovation</p>
              </div>
            </div>
            <div className="space-y-3 text-sm text-orange-700">
              <p>🇮🇳 Indian-made electric scooters</p>
              <p>🇮🇳 Supporting local manufacturing jobs</p>
              <p>🇮🇳 Reducing imports, boosting economy</p>
              <p>🇮🇳 Clean energy for a cleaner India</p>
              <p>🇮🇳 Innovation that puts India first</p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default JourneyComparison;