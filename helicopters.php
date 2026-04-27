<?php 
$pageTitle = "Helicopter Services - Transafrican Air";
$pageDescription = "Fast, flexible helicopter charter services for medical evacuations, executive transport, and specialized operations across Africa.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary py-16 md:py-24 text-white">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold">Helicopter Services</h1>
                    <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                        Fast, flexible helicopter charter services for urgent medical evacuations, executive transport, and specialized operations across Africa and beyond.
                    </p>
                    <p class="opacity-80">
                        Our helicopter fleet provides quick response times, remote location access, and direct point-to-point travel when you need it most.
                    </p>
                </div>
                <div class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img
                        src="/public/images/private-aircraft-flight.jpg"
                        alt="Modern helicopter in flight"
                        class="w-full h-full object-cover"
                    >
                </div>
            </div>
        </div>
    </section>

    <!-- Capabilities -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Helicopter Charter Capabilities</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                <?php 
                $features = [
                    ["title" => "Quick Response Times", "desc" => "Immediate availability for urgent transport needs."],
                    ["title" => "Remote Location Access", "desc" => "Land anywhere with minimal infrastructure requirements."],
                    ["title" => "Point-to-Point Travel", "desc" => "Direct routes avoiding traditional airport congestion."],
                    ["title" => "Medical Evacuation", "desc" => "Equipped for emergency medical transport operations."],
                    ["title" => "Executive Transport", "desc" => "VIP helicopter services for rapid city-to-city travel."],
                    ["title" => "Cargo Operations", "desc" => "Lift heavy cargo to hard-to-reach locations."]
                ];
                foreach ($features as $f): 
                ?>
                <div class="flex gap-4 p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition">
                    <i data-lucide="check-circle" class="w-6 h-6 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2"><?php echo $f['title']; ?></h3>
                        <p class="text-slate-500 text-sm"><?php echo $f['desc']; ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- CTA -->
    <section class="py-16">
        <div class="container mx-auto px-4 text-center">
            <div class="bg-primary/5 p-12 rounded-3xl border border-primary/20">
                <h2 class="text-3xl font-bold mb-4">Need a Helicopter Charter?</h2>
                <p class="text-slate-600 mb-8 max-w-2xl mx-auto">Contact us for fast, reliable helicopter charter with experienced crews and modern aircraft.</p>
                <div class="flex flex-wrap justify-center gap-4">
                    <a href="/contact-us.php" class="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Get a Quote</a>
                    <a href="tel:+254769604118" class="border-2 border-primary text-primary px-10 py-4 rounded-full font-bold hover:bg-primary hover:text-white transition-colors inline-block">Call Now</a>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
