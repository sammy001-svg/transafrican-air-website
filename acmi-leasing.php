<?php 
$pageTitle = "ACMI Leasing Solutions - Transafrican Air";
$pageDescription = "Aircraft, Crew, Maintenance and Insurance (ACMI) leasing solutions to expand your fleet capacity with minimal operational burden.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold">ACMI Leasing Solutions</h1>
                    <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                        Comprehensive Aircraft, Crew, Maintenance and Insurance leasing to expand your fleet capacity with minimal operational burden.
                    </p>
                    <a href="/get-quote.php" class="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Request ACMI Quote</a>
                </div>
                <div class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src="/public/images/trans-african-logo-desktop.png" class="w-full h-full object-contain p-8 bg-white/5">
                </div>
            </div>
        </div>
    </section>

    <!-- Components -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">ACMI Leasing Components</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4">Aircraft</h3>
                    <p class="text-slate-500 text-sm">Modern, well-maintained aircraft meeting international standards and your operational requirements.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4">Crew</h3>
                    <p class="text-slate-500 text-sm">Qualified pilots and crew members trained to the highest professional standards.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4">Maintenance</h3>
                    <p class="text-slate-500 text-sm">Comprehensive maintenance support ensuring optimal aircraft performance and safety.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border-l-4 border-primary hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4">Insurance</h3>
                    <p class="text-slate-500 text-sm">Full insurance coverage protecting your operations and providing peace of mind.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
