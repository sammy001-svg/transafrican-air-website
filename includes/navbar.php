<?php
$servicesLinks = [
    ["title" => "Group Charter", "href" => "/group-charter.php"],
    ["title" => "Private Jet Charter", "href" => "/private-jet-charter.php"],
    ["title" => "Cargo Charters", "href" => "/cargo-charters.php"],
];

$resourcesLinks = [
    ["title" => "Aircraft Fleet", "href" => "/aircraft-guide.php"],
    ["title" => "Careers", "href" => "/careers.php"],
    ["title" => "Privacy Policy", "href" => "/privacy-policy.php"],
    ["title" => "Terms & Conditions", "href" => "/terms-and-conditions.php"],
    ["title" => "Company Profile", "href" => "/company-profile.php"],
];
?>

<header class="sticky top-0 z-50 backdrop-blur-sm" style="background-color: rgba(0, 0, 0, 0.2);">
  <div class="w-full px-4 py-4 md:py-6">
    <div class="flex items-center justify-between gap-12">
      <!-- Logo -->
      <a href="/" class="shrink-0">
        <img src="/public/images/trans-african-logo-desktop.png" alt="Transafrican Air Logo" width="200" height="80" class="drop-shadow-md w-auto h-auto">
      </a>

      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-12 flex-1 justify-center">
        <a href="/" class="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap">Home</a>
        <a href="/who-we-are.php" class="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap">About</a>

        <!-- Services Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap">
            Services <i data-lucide="chevron-down" class="w-4 h-4"></i>
          </button>
          <div class="absolute left-0 mt-0 w-48 bg-black/95 rounded-lg shadow-lg border border-white/20 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <?php foreach ($servicesLinks as $link): ?>
              <a href="<?php echo $link['href']; ?>" class="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-white/10 transition"><?php echo $link['title']; ?></a>
            <?php endforeach; ?>
          </div>
        </div>

        <!-- Resources Dropdown -->
        <div class="relative group">
          <button class="flex items-center gap-1 text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap">
            Resources <i data-lucide="chevron-down" class="w-4 h-4"></i>
          </button>
          <div class="absolute left-0 mt-0 w-48 bg-black/95 rounded-lg shadow-lg border border-white/20 py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
            <?php foreach ($resourcesLinks as $link): ?>
              <a href="<?php echo $link['href']; ?>" <?php echo str_ends_with($link['href'], '.pdf') ? 'target="_blank"' : ''; ?> class="block px-4 py-2 text-sm text-white hover:text-primary hover:bg-white/10 transition"><?php echo $link['title']; ?></a>
            <?php endforeach; ?>
          </div>
        </div>

        <a href="/contact-us.php" class="text-white hover:text-primary transition drop-shadow-sm whitespace-nowrap">Contact Us</a>
      </nav>

      <!-- Right Actions -->
      <div class="hidden lg:flex items-center gap-8 mr-6">
        <i data-lucide="bell" class="w-6 h-6 text-white drop-shadow-sm"></i>
        <a href="/get-quote.php" class="bg-primary text-white px-6 py-2 rounded hover:opacity-90 transition font-medium drop-shadow-md whitespace-nowrap text-sm">
          Get A Quote
        </a>
      </div>

      <!-- Mobile Menu Button -->
      <button id="mobile-menu-toggle" class="lg:hidden p-2 text-white">
        <i data-lucide="menu" id="menu-icon-open" class="w-6 h-6"></i>
        <i data-lucide="x" id="menu-icon-close" class="w-6 h-6 hidden"></i>
      </button>
    </div>

    <!-- Mobile Navigation -->
    <nav id="mobile-menu" class="hidden lg:hidden mt-4 pb-4 space-y-3 border-t border-white/20 pt-4 bg-black/30 rounded-lg px-4 origin-top">
      <a href="/" class="block text-white hover:text-primary transition">Home</a>
      <a href="/who-we-are.php" class="block text-white hover:text-primary transition">About</a>
      
      <!-- Services Mobile -->
      <div>
        <button onclick="toggleMobileDropdown('mobile-services')" class="w-full flex items-center justify-between text-white hover:text-primary transition">
          Services <i data-lucide="chevron-down" class="w-4 h-4"></i>
        </button>
        <div id="mobile-services" class="hidden mt-2 ml-4 space-y-2 border-l border-white/20 pl-4">
          <?php foreach ($servicesLinks as $link): ?>
            <a href="<?php echo $link['href']; ?>" class="block text-sm text-white/80 hover:text-primary transition"><?php echo $link['title']; ?></a>
          <?php endforeach; ?>
        </div>
      </div>

      <a href="/contact-us.php" class="block text-white hover:text-primary transition">Contact Us</a>
      <a href="/get-quote.php" class="block bg-primary text-white px-4 py-2 rounded mt-4 text-center font-medium">Get A Quote</a>
    </nav>
  </div>
</header>

<script>
  // Mobile Menu Toggle
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = document.getElementById('menu-icon-open');
  const closeIcon = document.getElementById('menu-icon-close');

  mobileMenuToggle.addEventListener('click', () => {
    const isOpen = !mobileMenu.classList.contains('hidden');
    if (isOpen) {
      gsap.to(mobileMenu, { scale: 0.8, opacity: 0, duration: 0.3, onComplete: () => mobileMenu.classList.add('hidden') });
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
    } else {
      mobileMenu.classList.remove('hidden');
      gsap.fromTo(mobileMenu, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.2)" });
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
    }
  });

  function toggleMobileDropdown(id) {
    const el = document.getElementById(id);
    el.classList.toggle('hidden');
  }

  // Initialize Lucide icons
  lucide.createIcons();
</script>
