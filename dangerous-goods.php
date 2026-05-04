<?php 
$pageTitle = "Dangerous Goods Cargo - Transafrican Air";
$pageDescription = "Specialized transport for dangerous goods and hazardous materials across Africa and beyond.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="bg-slate-900 text-white py-16 md:py-24 relative overflow-hidden">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
        <div class="container mx-auto px-4 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">Dangerous Goods Transport</h1>
            <p class="text-lg md:text-xl text-gray-400 max-w-2xl">
                Safe, compliant, and expert handling of hazardous materials and dangerous goods.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 md:py-24 bg-background">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold">Uncompromising Safety Standards</h2>
                    <p class="text-foreground/70 leading-relaxed">
                        Transporting dangerous goods requires specialized knowledge, strict adherence to IATA regulations, and meticulous handling. At Transafrican Air, we have the expertise and certifications to transport various classes of dangerous goods safely across our network.
                    </p>
                    <div class="space-y-4">
                        <div class="flex gap-4">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary flex-shrink-0"></i>
                            <p class="text-foreground/80">Certified DGR handling teams</p>
                        </div>
                        <div class="flex gap-4">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary flex-shrink-0"></i>
                            <p class="text-foreground/80">Compliance with IATA and international regulations</p>
                        </div>
                        <div class="flex gap-4">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary flex-shrink-0"></i>
                            <p class="text-foreground/80">Specialized storage and containment solutions</p>
                        </div>
                    </div>
                </div>
                <div class="rounded-2xl overflow-hidden shadow-2xl h-96">
                    <img src="/public/images/transafrican-cargo-aircraft.jpg" alt="Dangerous Goods Handling" class="w-full h-full object-cover">
                </div>
            </div>

            <!-- DG Classes -->
            <div class="mb-16">
                <h2 class="text-3xl font-bold mb-8 text-center">Classes We Transport</h2>
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <?php 
                    $classes = [
                        ["title" => "Explosives", "desc" => "Class 1 materials handled with extreme precision."],
                        ["title" => "Gases", "desc" => "Compressed, liquefied, or dissolved gases (Class 2)."],
                        ["title" => "Flammable Liquids", "desc" => "Class 3 hazardous liquids and fuels."],
                        ["title" => "Oxidizing Substances", "desc" => "Class 5.1 and 5.2 materials."],
                        ["title" => "Toxic & Infectious", "desc" => "Class 6 substances, including medical samples."],
                        ["title" => "Corrosives", "desc" => "Class 8 acidic or alkaline materials."]
                    ];
                    foreach ($classes as $class): ?>
                        <div class="bg-white p-6 rounded-xl border border-slate-200 hover:border-primary transition group shadow-sm">
                            <h3 class="font-bold text-lg mb-2 group-hover:text-primary"><?php echo $class['title']; ?></h3>
                            <p class="text-foreground/70 text-sm"><?php echo $class['desc']; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- CTA -->
            <div class="bg-primary text-white rounded-3xl p-8 md:p-12 text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">Consult Our DG Experts</h2>
                <p class="text-white/80 mb-6 max-w-2xl mx-auto">
                    Ensure your hazardous shipment is compliant and safe. Contact us for specialized consultation.
                </p>
                <a href="/get-quote.php" class="inline-flex items-center bg-white text-primary px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
                    Request DG Quote
                </a>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
