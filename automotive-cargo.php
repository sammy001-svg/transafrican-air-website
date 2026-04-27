<?php 
$pageTitle = "Automotive & Parts Cargo - Transafrica Air";
$pageDescription = "Secure transport for high-value vehicles, racing cars, and critical automotive spare parts across Africa.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Automotive Cargo</h1>
            <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                Expert handling for high-value vehicles and time-critical automotive parts. Precision loading and secure transit.
            </p>
        </div>
    </section>

    <section class="py-16">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold mb-12">Automotive Expertise</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="p-8 bg-white shadow-lg rounded-2xl border">
                    <i data-lucide="car" class="w-12 h-12 text-primary mx-auto mb-6"></i>
                    <h3 class="font-bold text-xl mb-4">Finished Vehicles</h3>
                    <p class="text-slate-500 text-sm">Secure transport for luxury cars, electric vehicles, and prototypes.</p>
                </div>
                <div class="p-8 bg-white shadow-lg rounded-2xl border">
                    <i data-lucide="zap" class="w-12 h-12 text-primary mx-auto mb-6"></i>
                    <h3 class="font-bold text-xl mb-4">Spare Parts</h3>
                    <p class="text-slate-500 text-sm">Rapid delivery for 'aircraft on ground' (AOG) or production line stalls.</p>
                </div>
                <div class="p-8 bg-white shadow-lg rounded-2xl border">
                    <i data-lucide="settings" class="w-12 h-12 text-primary mx-auto mb-6"></i>
                    <h3 class="font-bold text-xl mb-4">Motorsports</h3>
                    <p class="text-slate-500 text-sm">Specialized logistics for racing teams and automotive events.</p>
                </div>
            </div>
            <div class="mt-16">
                <a href="/contact-us.php" class="bg-primary text-white px-12 py-4 rounded-full font-bold shadow-xl">Get Automotive Quote</a>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
