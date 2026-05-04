<?php 
$pageTitle = "Transafrican Air - Premium Aircraft Charter Services Across Africa";
$pageDescription = "Transafrican Air provides expert passenger and cargo charter solutions across Africa, specializing in government, humanitarian aid, and private jet services.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
  <!-- Hero Section -->
  <section id="hero" class="relative h-[580px] md:h-[680px] overflow-hidden bg-black -mt-16">
    <div id="slides-container" class="relative w-full h-full">
      <!-- Slides will be handled by JS -->
    </div>

    <!-- Content Overlays -->
    <div class="absolute inset-0 flex items-center justify-center pointer-events-none">
      <div id="hero-content" class="text-center text-white z-10 opacity-0">
        <h2 id="hero-title" class="text-3xl md:text-5xl font-bold mb-4 px-4 text-pretty drop-shadow-lg"></h2>
        <p id="hero-subtitle" class="text-lg md:text-xl text-gray-100 drop-shadow-md"></p>
      </div>
    </div>

    <!-- Navigation -->
    <button onclick="prevSlide()" class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition">
      <i data-lucide="chevron-left" class="w-6 h-6"></i>
    </button>
    <button onclick="nextSlide()" class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition">
      <i data-lucide="chevron-right" class="w-6 h-6"></i>
    </button>

    <!-- Indicators -->
    <div id="slide-indicators" class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2"></div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-16 md:py-24 bg-background overflow-hidden">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6" id="about-content">
          <div class="inline-block px-4 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">Aviation Excellence</div>
          <h2 class="text-4xl md:text-5xl font-bold text-foreground">Defining the Standard of African Aviation</h2>
          <p class="text-lg text-foreground/80 leading-relaxed text-pretty">
            <span class="font-bold text-black border-b-2 border-primary">Transafrican Air</span> specializes in tailored air cargo and passenger transport solutions designed for the most demanding environments. We are the trusted partner for the United Nations, humanitarian agencies, and government institutions, providing critical connectivity where it matters most.
          </p>
          <div class="flex gap-4">
              <a href="/who-we-are.php" class="bg-primary text-white px-8 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform">Our Story</a>
              <a href="/company-profile.php" class="border-2 border-primary text-primary px-8 py-3 rounded-full font-bold hover:bg-primary hover:text-white transition-colors">Download Profile</a>
          </div>
        </div>
        <div class="relative h-96 overflow-hidden rounded-3xl shadow-2xl group" id="about-image-container">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.14%20PM-Yfsc70TAMjZ2qdpFqiB0rlkDKePKnP.png" alt="About Transafrican Air" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
          <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
              <p class="text-white font-bold italic">Dedicated Professionals, Mission-Ready</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Core Services -->
  <section class="py-16 md:py-24 bg-slate-900 text-white">
      <div class="container mx-auto px-4">
          <div class="text-center mb-16">
              <h2 class="text-4xl font-bold mb-4 uppercase tracking-tight">Our Core Capabilities</h2>
              <p class="text-slate-400 max-w-2xl mx-auto">Providing world-class aircraft charter and logistics solutions tailored to your unique requirements.</p>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <!-- Cargo -->
              <div class="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition">
                  <div class="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <i data-lucide="package" class="w-8 h-8 text-primary"></i>
                  </div>
                  <h3 class="text-2xl font-bold mb-4">Air Cargo Logistics</h3>
                  <p class="text-slate-400 mb-6">From humanitarian relief to high-value automotive parts, we handle complex cargo with precision.</p>
                  <a href="/cargo-charters.php" class="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">Explore Cargo <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
              </div>
              <!-- Passenger -->
              <div class="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition">
                  <div class="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <i data-lucide="plane" class="w-8 h-8 text-primary"></i>
                  </div>
                  <h3 class="text-2xl font-bold mb-4">Passenger Charters</h3>
                  <p class="text-slate-400 mb-6">Premium private jets and group charters for executive travel, sports teams, and official delegations.</p>
                  <a href="/private-jet-charter.php" class="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">Explore Passenger <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
              </div>
              <!-- Specialty -->
              <div class="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition">
                  <div class="bg-primary/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                      <i data-lucide="award" class="w-8 h-8 text-primary"></i>
                  </div>
                  <h3 class="text-2xl font-bold mb-4">Specialist Solutions</h3>
                  <p class="text-slate-400 mb-6">ACMI leasing, helicopter services, and humanitarian emergency response operations.</p>
                  <a href="/acmi-leasing.php" class="flex items-center gap-2 text-primary font-bold group-hover:translate-x-2 transition-transform">Specialist Services <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
              </div>
          </div>
      </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-16 md:py-24 bg-background">
      <div class="container mx-auto px-4">
          <div class="text-center mb-16">
              <h2 class="text-4xl md:text-5xl font-bold text-primary mb-4 uppercase tracking-tight">Why Choose Transafrican Air</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-4 gap-0">
              <div class="px-8 py-8 text-center md:border-r border-slate-300">
                  <div class="mb-6 flex justify-center"><i data-lucide="award" class="w-12 h-12 text-primary"></i></div>
                  <div class="text-4xl font-bold text-primary mb-3">15+</div>
                  <h3 class="text-xl font-bold mb-4">Years of Excellence</h3>
                  <p class="text-sm text-foreground/70">Proven track record serving government and humanitarian missions.</p>
              </div>
              <div class="px-8 py-8 text-center md:border-r border-slate-300">
                  <div class="mb-6 flex justify-center"><i data-lucide="globe" class="w-12 h-12 text-primary"></i></div>
                  <div class="text-4xl font-bold text-primary mb-3">40+</div>
                  <h3 class="text-xl font-bold mb-4">Global Coverage</h3>
                  <p class="text-sm text-foreground/70">Pan-African presence with reliable operations across the continent.</p>
              </div>
              <div class="px-8 py-8 text-center md:border-r border-slate-300">
                  <div class="mb-6 flex justify-center"><i data-lucide="plane" class="w-12 h-12 text-primary"></i></div>
                  <div class="text-4xl font-bold text-primary mb-3">25+</div>
                  <h3 class="text-xl font-bold mb-4">Diverse Fleet</h3>
                  <p class="text-sm text-foreground/70">Access to a wide range of aircraft for every operational need.</p>
              </div>
              <div class="px-8 py-8 text-center">
                  <div class="mb-6 flex justify-center"><i data-lucide="phone" class="w-12 h-12 text-primary"></i></div>
                  <div class="text-4xl font-bold text-primary mb-3">24/7</div>
                  <h3 class="text-xl font-bold mb-4">Personal Service</h3>
                  <p class="text-sm text-foreground/70">Dedicated teams available anytime to support your mission.</p>
              </div>
          </div>
      </div>
  </section>

  <!-- CTA Banner -->
  <section class="py-16 md:py-24">
      <div class="container mx-auto px-4">
          <div class="relative bg-primary rounded-[3rem] p-12 md:p-20 text-white overflow-hidden shadow-2xl">
              <div class="relative z-10 text-center space-y-8">
                  <h2 class="text-4xl md:text-6xl font-bold max-w-4xl mx-auto">Ready for Your Next Mission?</h2>
                  <p class="text-xl opacity-90 max-w-2xl mx-auto">Get in touch with our experts to discuss your aircraft charter or cargo requirements.</p>
                  <div class="flex flex-wrap justify-center gap-6">
                      <a href="/get-quote.php" class="bg-white text-primary px-12 py-4 rounded-full font-bold text-lg hover:scale-105 transition-transform shadow-xl">Get a Custom Quote</a>
                      <a href="/contact-us.php" class="bg-primary border-2 border-white text-white px-12 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-primary transition-colors">Contact Our Team</a>
                  </div>
              </div>
              <!-- Decorative Circles -->
              <div class="absolute -top-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
              <div class="absolute -bottom-24 -right-24 w-64 h-64 bg-black/10 rounded-full blur-3xl"></div>
          </div>
      </div>
  </section>
</main>

<script>
  const slides = [
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet-airplane-landing-4YH0WHRTbFiDo38vlMQygpVGvoF9Ks.jpg",
      title: "Government Projects",
      subtitle: "Reliable air cargo solutions for government operations",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/business-jet-taxi-airplane-following-Picsart-AiImageEnhancer-gSh6AQF7zPSRyhk5DCpEjPJYhxLXpA.jpg",
      title: "Premium Jet Charter Services",
      subtitle: "Seamless global connectivity and luxury travel",
    },
    {
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/jet-airplane-landing-4YH0WHRTbFiDo38vlMQygpVGvoF9Ks.jpg",
      title: "Interline Partnerships",
      subtitle: "Trusted partner for aviation solutions worldwide",
    },
  ];

  let currentSlide = 0;
  const container = document.getElementById('slides-container');
  const content = document.getElementById('hero-content');
  const title = document.getElementById('hero-title');
  const subtitle = document.getElementById('hero-subtitle');
  const indicators = document.getElementById('slide-indicators');

  function initHero() {
    slides.forEach((slide, i) => {
      // Create Image
      const img = document.createElement('div');
      img.className = `absolute inset-0 transition-opacity duration-1000 ${i === 0 ? 'opacity-100' : 'opacity-0'}`;
      img.innerHTML = `<img src="${slide.image}" class="w-full h-full object-cover">
                       <div class="absolute inset-0 bg-black/40"></div>`;
      img.id = `slide-${i}`;
      container.appendChild(img);

      // Create Indicator
      const dot = document.createElement('button');
      dot.className = `h-2 rounded-full transition ${i === 0 ? 'bg-white w-8' : 'bg-white/50 w-2'}`;
      dot.onclick = () => goToSlide(i);
      dot.id = `dot-${i}`;
      indicators.appendChild(dot);
    });

    updateContent();
    setInterval(nextSlide, 5000);
  }

  function updateContent() {
    gsap.to(content, { opacity: 0, y: 20, duration: 0.5, onComplete: () => {
      title.innerText = slides[currentSlide].title;
      subtitle.innerText = slides[currentSlide].subtitle;
      gsap.to(content, { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" });
    }});

    slides.forEach((_, i) => {
      document.getElementById(`slide-${i}`).style.opacity = i === currentSlide ? '1' : '0';
      const dot = document.getElementById(`dot-${i}`);
      if (dot) {
        dot.classList.toggle('bg-white', i === currentSlide);
        dot.classList.toggle('w-8', i === currentSlide);
        dot.classList.toggle('bg-white/50', i !== currentSlide);
        dot.classList.toggle('w-2', i !== currentSlide);
      }
    });
  }

  function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    updateContent();
  }

  function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateContent();
  }

  function goToSlide(i) {
    currentSlide = i;
    updateContent();
  }

  // Animation on scroll
  gsap.from("#about-content", {
      scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
      },
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
  });

  gsap.from("#about-image-container", {
      scrollTrigger: {
          trigger: "#about",
          start: "top 80%",
      },
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out"
  });

  initHero();
  lucide.createIcons();
</script>

<?php include 'includes/footer.php'; ?>
