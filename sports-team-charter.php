<?php 
$pageTitle = "Sports Teams Charter - Transafrican Air";
$pageDescription = "Dedicated charter solutions for sports teams, tournaments, and athletic events with specialized equipment transport and premium comfort.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold">Sports Teams Charter</h1>
                    <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                        Specialized charter services designed for athletic teams, tournaments, and sports events with equipment transport and luxury comfort.
                    </p>
                    <a href="/contact-us.php" class="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Request Team Charter</a>
                </div>
                <div class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src="/public/images/team-aircraft.jpg" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Specialties -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Sports Charter Specialties</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                        <i data-lucide="trophy" class="w-6 h-6"></i> Tournament Transport
                    </h3>
                    <p class="text-slate-500">Complete travel solutions for tournaments with synchronized schedules and dedicated support.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                        <i data-lucide="users" class="w-6 h-6"></i> Team Accommodations
                    </h3>
                    <p class="text-slate-500">Spacious aircraft with comfortable seating and private spaces for team strategizing.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                        <i data-lucide="zap" class="w-6 h-6"></i> Flexible Scheduling
                    </h3>
                    <p class="text-slate-500">Custom departure times and multi-leg itineraries to accommodate tight competition schedules.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                        <i data-lucide="shield" class="w-6 h-6"></i> Safety & Reliability
                    </h3>
                    <p class="text-slate-500">Professional crew and on-time performance guarantees ensuring your team arrives game-ready.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
        <div class="container mx-auto px-4 text-center">
            <div class="bg-slate-900 text-white p-12 rounded-3xl">
                <h2 class="text-3xl font-bold mb-4">Get Your Team Tournament-Ready</h2>
                <p class="opacity-80 mb-8 max-w-2xl mx-auto">Let us handle your travel logistics so your team can focus on winning.</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/contact-us.php" class="bg-primary text-white px-10 py-4 font-bold rounded-full">Request a Quote</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
