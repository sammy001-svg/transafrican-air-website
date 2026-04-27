<?php 
$pageTitle = "Transafrican Air - Premium Aircraft Charter Services Across Africa";
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
          <h2 class="text-4xl md:text-5xl font-bold text-foreground">About Us</h2>
          <p class="text-lg text-foreground/80 leading-relaxed">
            <span class="font-bold text-black border-b-2 border-primary">Transafrican Air</span> specializes in tailored air cargo and passenger transport solutions for urgent Humanitarian requirements, the United Nations and government institutions. We support both regional cargo consolidators, freight forwarders and airline partners as well as corporates and individuals with short term, long term, scheduled and ad-hoc needs for aircraft provision.
          </p>
        </div>
        <div class="relative h-96 overflow-hidden rounded-lg shadow-lg group" id="about-image-container">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-03-24%20at%203.20.14%20PM-Yfsc70TAMjZ2qdpFqiB0rlkDKePKnP.png" alt="About Transafrican Air" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
        </div>
      </div>
    </div>
  </section>

  <!-- Why Choose Us -->
  <section class="py-16 bg-slate-50">
      <div class="container mx-auto px-4">
          <div class="text-center mb-12">
              <h2 class="text-3xl md:text-4xl font-bold mb-4">Why Choose Us</h2>
              <div class="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div class="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary hover:shadow-md transition">
                  <i data-lucide="shield-check" class="w-12 h-12 text-primary mb-4"></i>
                  <h3 class="text-xl font-bold mb-3">Reliability</h3>
                  <p class="text-slate-600">Proven track record with complex government and international agency logistical operations.</p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary hover:shadow-md transition">
                  <i data-lucide="globe" class="w-12 h-12 text-primary mb-4"></i>
                  <h3 class="text-xl font-bold mb-3">Global Reach</h3>
                  <p class="text-slate-600">Extensive network enabling seamless connectivity across Africa and beyond.</p>
              </div>
              <div class="bg-white p-8 rounded-lg shadow-sm border-t-4 border-primary hover:shadow-md transition">
                  <i data-lucide="users" class="w-12 h-12 text-primary mb-4"></i>
                  <h3 class="text-xl font-bold mb-3">Expert Team</h3>
                  <p class="text-slate-600">Specialized professionals dedicated to mission-critical aviation solutions.</p>
              </div>
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
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cargo-airplane-flying-above-the-clouds-at-sunrise-8Kj5rKMDt0C7Moal9SRt6sjat4HFar.jpg",
      title: "Charter Specialist & Air Cargo Operations",
      subtitle: "Professional passenger and air cargo solutions for all your needs",
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
      dot.classList.toggle('bg-white', i === currentSlide);
      dot.classList.toggle('w-8', i === currentSlide);
      dot.classList.toggle('bg-white/50', i !== currentSlide);
      dot.classList.toggle('w-2', i !== currentSlide);
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
  gsap.registerPlugin(ScrollTrigger);

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
