<?php 
$pageTitle = "About Us - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
  <!-- Page Banner -->
  <section class="relative py-20 bg-cover bg-center -mt-16" style="background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C19%2C57%20-Picsart-AiImageEnhancer-dvciP85FRnEmxnogOYTSnwdFDn2r3O.jpeg');">
    <div class="absolute inset-0 bg-black/50"></div>
    <div class="container mx-auto px-4 relative z-10 text-center">
      <h1 class="text-4xl font-bold text-white mb-4">About</h1>
      <div class="flex items-center justify-center gap-2 text-gray-200 text-sm">
        <a href="/" class="hover:text-white transition">Home</a>
        <span>»</span>
        <span class="text-gray-300">About</span>
      </div>
    </div>
  </section>

  <!-- Company Overview -->
  <section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <div class="max-w-4xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold text-foreground">Company Overview</h2>
        <div class="space-y-4 text-gray-700 leading-relaxed text-lg">
          <p>Transafrican Air is an aviation enterprise focused on developing sustainable air connectivity within Africa and between Africa and global markets.</p>
          <p>The company is designed to bridge logistics gaps, support trade flows, and provide efficient aviation services to governments, businesses, and humanitarian organizations.</p>
          <p>Operating from strategic African hubs, Transafrican Air combines aviation expertise with logistics innovation to deliver dependable solutions in challenging environments.</p>
          <p>Our core business is export oriented. We outsource to export and service the local clients' import requirements.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Journey & Commitment -->
  <section class="py-24 bg-linear-to-r from-slate-900 to-slate-800 relative overflow-hidden">
    <div class="absolute inset-0 opacity-10 bg-cover bg-center" style="background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203%2C19%2C57%20-Picsart-AiImageEnhancer-dvciP85FRnEmxnogOYTSnwdFDn2r3O.jpeg');"></div>
    <div class="container mx-auto px-4 relative z-10">
      <div class="text-center mb-16">
        <p class="text-sm text-slate-400 uppercase tracking-widest mb-2 font-bold">Leading African Aviation for Over a Decade</p>
        <p class="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto">Transafrican Air specializes in tailored passenger and air cargo solutions serving humanitarian, government, corporate, and private charter needs across Africa and beyond.</p>
      </div>

      <div class="grid lg:grid-cols-2 gap-16">
        <!-- Story/Mission -->
        <div class="space-y-12">
          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold text-white uppercase mb-3 flex items-center gap-3">
              <span class="w-2 h-2 rounded-full bg-primary"></span> Our Story
            </h3>
            <p class="text-slate-400 leading-relaxed text-lg">Transafrican Air (TAA) was established in 2011 to provide safe and cost-effective air transport solutions. Since inception, TAA has grown into a notable player in cargo charter and logistics across East Africa, Middle East, and Europe.</p>
          </div>

          <div class="border-l-4 border-primary pl-6">
            <h3 class="text-xl font-bold text-white uppercase mb-3">Mission & Vision</h3>
            <p class="text-slate-400 mb-2"><span class="text-primary font-semibold">Vision:</span> To be the leader in business aviation by providing uncompromised safety and exceptional quality.</p>
            <p class="text-slate-400"><span class="text-primary font-semibold">Mission:</span> To provide customized air transportation through environment that fosters teamwork and growth.</p>
          </div>
        </div>

        <!-- Statistics -->
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div class="bg-slate-700/50 p-8 rounded-lg border border-primary/30 hover:border-primary transition">
            <div class="text-4xl font-bold text-primary mb-2">15+</div>
            <h4 class="text-white font-bold mb-1">Years Experience</h4>
            <p class="text-slate-400 text-sm">Proven excellence in global aviation.</p>
          </div>
          <div class="bg-slate-700/50 p-8 rounded-lg border border-primary/30 hover:border-primary transition">
            <div class="text-4xl font-bold text-primary mb-2">40+</div>
            <h4 class="text-white font-bold mb-1">Countries Served</h4>
            <p class="text-slate-400 text-sm">Extensive operational footprint.</p>
          </div>
          <div class="bg-slate-700/50 p-8 rounded-lg border border-primary/30 hover:border-primary transition">
            <div class="text-4xl font-bold text-primary mb-2">100%</div>
            <h4 class="text-white font-bold mb-1">Safety First</h4>
            <p class="text-slate-400 text-sm">Full regulatory compliance.</p>
          </div>
          <div class="bg-slate-700/50 p-8 rounded-lg border border-primary/30 hover:border-primary transition">
            <div class="text-4xl font-bold text-primary mb-2">24/7</div>
            <h4 class="text-white font-bold mb-1">Support</h4>
            <p class="text-slate-400 text-sm">Always ready for take-off.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>

<?php include 'includes/footer.php'; ?>
