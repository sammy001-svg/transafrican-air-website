<?php 
$pageTitle = "Private Charter Solutions - Transafrican Air";
$pageDescription = "Experience the peak of aviation with our private jet charters. Luxury travel, official visits, and wildlife trips tailored to your schedule.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
  <!-- Header -->
  <section class="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-primary">
    <div class="container mx-auto px-4 h-full relative z-10">
      <div class="max-w-3xl text-white space-y-4">
        <h1 class="text-3xl md:text-5xl font-bold">Private Charter Solutions</h1>
        <p class="text-sm md:text-base opacity-90 max-w-xl">No matter the mission, from executive travel to urgent operations or premium getaways, we provide private charter options tailored to your needs.</p>
      </div>
    </div>
  </section>

  <!-- Service Sub-Grid -->
  <section class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl md:text-3xl font-bold mb-12 text-primary">Explore Private Charter</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <!-- Private Jet -->
        <div class="group bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-xl transition border-slate-200">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Private Jet Luxury</h3>
            <p class="text-slate-500 text-sm mb-4">Experience flexibility with exclusive private jet charters.</p>
            <a href="/private-jets-guide" class="text-primary font-bold text-sm inline-flex items-center gap-1">LEARN MORE <i data-lucide="arrow-right" class="w-3 h-3"></i></a>
          </div>
        </div>
        <!-- Official Visits -->
        <div class="group bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-xl transition border-slate-200">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Official Visits</h3>
            <p class="text-slate-500 text-sm mb-4">Tailor-made flights for esteemed Officials and Dignitaries.</p>
            <a href="/official-trips" class="text-primary font-bold text-sm inline-flex items-center gap-1">LEARN MORE <i data-lucide="arrow-right" class="w-3 h-3"></i></a>
          </div>
        </div>
        <!-- Wildlife -->
        <div class="group bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-xl transition border-slate-200">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Wildlife Trips</h3>
            <p class="text-slate-500 text-sm mb-4">Access exclusive reserves and parks with a private jet.</p>
            <a href="/wildlife-trips" class="text-primary font-bold text-sm inline-flex items-center gap-1">LEARN MORE <i data-lucide="arrow-right" class="w-3 h-3"></i></a>
          </div>
        </div>
        <!-- Helicopters -->
        <div class="group bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-xl transition border-slate-200">
          <div class="p-6">
            <h3 class="font-bold text-lg mb-2">Helicopters</h3>
            <p class="text-slate-500 text-sm mb-4">Medical evacuations and specialized rapid response.</p>
            <a href="/helicopters" class="text-primary font-bold text-sm inline-flex items-center gap-1">LEARN MORE <i data-lucide="arrow-right" class="w-3 h-3"></i></a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Leisure vs Business -->
  <section class="py-16 md:py-24 bg-slate-900 text-white">
    <div class="container mx-auto px-4">
      <div class="grid md:grid-cols-2 gap-8">
        <div class="bg-primary p-10 rounded-2xl">
          <h3 class="text-2xl font-bold mb-4">Flying for Leisure</h3>
          <p class="text-white/80 leading-relaxed mb-6">Whether it's a romantic getaway or a family vacation, private jet travel offers unparalleled convenience and comfort tailored to your desires.</p>
          <a href="/contact-us.php" class="font-bold border-b-2 border-white inline-flex items-center gap-2">Plan your getaway <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
        <div class="bg-primary p-10 rounded-2xl">
          <h3 class="text-2xl font-bold mb-4">Flying for Business</h3>
          <p class="text-white/80 leading-relaxed mb-6">Private jet travel for business embodies efficiency and productivity. Set your own schedule and fly directly to your destination.</p>
          <a href="/contact-us.php" class="font-bold border-b-2 border-white inline-flex items-center gap-2">Plan your business flight <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
        </div>
      </div>
    </div>
  </section>

  <!-- CTA -->
  <section class="py-16 text-center">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-6">Experience the Peak of Aviation</h2>
        <p class="text-slate-600 mb-8 max-w-xl mx-auto">Get in touch with our experts for a personalized private charter quote.</p>
        <a href="/contact-us.php" class="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition inline-block">Request a Quote</a>
    </div>
  </section>
</main>

<?php include 'includes/footer.php'; ?>
