<?php 
$pageTitle = "Airlines Solutions - Transafrican Air";
$pageDescription = "Interline partnerships, ACMI leasing, and airline support services across Africa.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="bg-slate-900 text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">Airlines Solutions</h1>
            <p class="text-lg md:text-xl text-gray-400 max-w-2xl">
                Empowering airline partners with capacity, logistics support, and regional expertise.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 md:py-24 bg-background">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- ACMI Leasing -->
                <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                    <h3 class="text-2xl font-bold mb-4 text-primary">ACMI Leasing</h3>
                    <p class="text-foreground/70 mb-6">Rapidly scale your fleet capacity with our Aircraft, Crew, Maintenance, and Insurance (ACMI) solutions.</p>
                    <a href="/acmi-leasing.php" class="text-primary font-bold inline-flex items-center gap-2">Learn More <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
                <!-- Interline -->
                <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                    <h3 class="text-2xl font-bold mb-4 text-primary">Interline Partners</h3>
                    <p class="text-foreground/70 mb-6">Join our network of interline partners to extend your reach across the African continent seamlessly.</p>
                    <a href="/contact-us.php" class="text-primary font-bold inline-flex items-center gap-2">Partner with Us <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
                <!-- Charter Support -->
                <div class="p-8 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition">
                    <h3 class="text-2xl font-bold mb-4 text-primary">Charter Support</h3>
                    <p class="text-foreground/70 mb-6">Supporting airlines with overflow cargo and passenger charter capacity during peak seasons or AOG situations.</p>
                    <a href="/cargo-charters.php" class="text-primary font-bold inline-flex items-center gap-2">Explore Capacity <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                </div>
            </div>

            <!-- Partnerships Section -->
            <div class="bg-slate-50 p-12 rounded-3xl border border-slate-200">
                <div class="max-w-3xl mx-auto text-center space-y-6">
                    <h2 class="text-3xl font-bold">A Trusted Regional Partner</h2>
                    <p class="text-lg text-foreground/70 italic">"Transafrican Air bridges the gap for international carriers looking for reliable, safe, and efficient operational support within Africa."</p>
                    <div class="pt-6">
                        <a href="/get-quote.php" class="bg-primary text-white px-10 py-3 rounded-full font-bold shadow-lg hover:opacity-90 transition">Discuss Partnerships</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
