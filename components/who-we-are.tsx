import { MaskedTextReveal } from "./masked-text-reveal"

export default function WhoWeAreSection() {
  return (
    <div className="w-full">
      {/* Page Banner */}
      <section
        className="relative py-20 bg-cover bg-center -mt-16"
        style={{
          backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C19%2C57%20-Picsart-AiImageEnhancer-dvciP85FRnEmxnogOYTSnwdFDn2r3O.jpeg')",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center">
            <MaskedTextReveal as="h1" className="text-4xl font-bold text-white mb-4">
              About
            </MaskedTextReveal>
            <div className="flex items-center justify-center gap-2 text-gray-200">
              <a href="/" className="hover:text-white transition">
                Home
              </a>
              <span>»</span>
              <span className="text-gray-300">About</span>
            </div>
          </div>
        </div>
      </section>

      {/* The Short Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-7 gap-8 items-start">
            <div className="lg:col-span-7">
              <div>
                <MaskedTextReveal as="h2" className="text-3xl font-bold mb-6 text-foreground">
                  Company Overview
                </MaskedTextReveal>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <MaskedTextReveal as="p">
                    Transafrican Air is an aviation enterprise focused on developing sustainable air connectivity within Africa and between Africa and global markets.
The company is designed to bridge logistics gaps, support trade flows, and provide efficient aviation services to governments, businesses, and humanitarian organizations.
Operating from strategic African hubs, Transafrican Air combines aviation expertise with logistics innovation to deliver dependable solutions in challenging environments.
                  </MaskedTextReveal>
                  <MaskedTextReveal as="p">
                    Our core business is export oriented. We outsource to export and service the local clients' import
                    requirements.
                  </MaskedTextReveal>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
        {/* Background overlay with aircraft imagery */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C19%2C57%20-Picsart-AiImageEnhancer-dvciP85FRnEmxnogOYTSnwdFDn2r3O.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>

        <div className="container mx-auto px-4 relative z-10">
          {/* Header text */}
          <div className="text-center mb-16">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2">
              Leading African Aviation for Over a Decade
            </p>
            <MaskedTextReveal as="p" className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">
              Transafrican Air specializes in tailored passenger and air cargo solutions serving humanitarian, government, corporate, and private charter needs across Africa and beyond.
            </MaskedTextReveal>
          </div>

          {/* Two-column layout */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column - Company Overview */}
            <div className="space-y-8">
              {/* Section 1: Our Story */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Our Story</h3>
                </div>
                <MaskedTextReveal as="p" className="text-slate-400 leading-relaxed">
                  Transafrican Air, commonly referred to as TAA, was established in 2011 to provide safe and cost-effective air transport solutions for both passengers and cargo in the East African region. Since inception, TAA has grown to become a notable player in the air cargo charter and logistics business in the region, with regular air cargo services in Kenya, Uganda, South Sudan, Rwanda, Somalia, and The Democratic Republic of Congo with connectivity from the Middle East, Europe and the Far East.            
                </MaskedTextReveal>
              </div>

              {/* Section 2: Our Mission and Vision */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Our Mission & Vision</h3>
                </div>
                <div className="space-y-3 text-slate-400 leading-relaxed">
                  <p>
                    <span className="text-primary font-semibold">Our Vision:</span> Transafrican Air is committed to being the leader in business aviation services by providing our customers and employees uncompromised safety, exceptional quality and unparalleled customer service.
                  </p>
                  <p>
                    <span className="text-primary font-semibold">Our Mission:</span> To provide our customers with customized and unique air transportation experiences through an environment that fosters continuous improvement, teamwork and growth.
                  </p>
                </div>
              </div>

              {/* Section 3: Our Commitment */}
              <div className="border-l-4 border-primary pl-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <div className="w-6 h-6 border-2 border-primary rounded-full"></div>
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase tracking-wide">Our Commitment</h3>
                </div>
                <div className="space-y-4 text-slate-400 leading-relaxed">
                  <div>
                    <h4 className="text-primary font-semibold mb-2">To Safety</h4>
                    <p>
                      We are committed to using sound and responsible practices to protect the safety and health of all persons and property involved in our operations, in strict compliance with statutory, industry and company approved procedures.
                    </p>
                  </div>
                  <div>
                    <h4 className="text-primary font-semibold mb-2">To Quality</h4>
                    <p>
                      We commit to maintain and implement safety management while continuously improving an established Quality Management System in accordance with the requirements of Regulation 16 and 28 of the Civil Aviation Regulations of 2018 and other applicable regulations.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Statistics */}
            <div className="space-y-8">
              {/* Stat 1 */}
              <div className="bg-slate-700/50 rounded-lg p-8 border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Years of Experience</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Over a decade of proven excellence in African aviation and cargo services.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-slate-700/50 rounded-lg p-8 border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary">40+</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Countries Served</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Operational presence across East Africa and expanding global reach.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 3 */}
              <div className="bg-slate-700/50 rounded-lg p-8 border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary">100%</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Safety Commitment</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Uncompromised safety standards and compliance with all aviation regulations.
                    </p>
                  </div>
                </div>
              </div>

              {/* Stat 4 */}
              <div className="bg-slate-700/50 rounded-lg p-8 border border-primary/30">
                <div className="flex items-start gap-4">
                  <div className="text-4xl font-bold text-primary">24/7</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Support Available</h4>
                    <p className="text-slate-400 leading-relaxed">
                      Round-the-clock customer support and operational readiness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
