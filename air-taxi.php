<?php 
$pageTitle = "Air Taxi Services - Transafrican Air";
$pageDescription = "On-demand air taxi services for rapid point-to-point travel across Africa.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">Air Taxi Services</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl">
                On-demand air taxi services for rapid point-to-point travel, bypassing congested roads and traditional airport delays.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 md:py-24 bg-background">
        <div class="container mx-auto px-4">
            <!-- Features -->
            <div class="mb-16">
                <h2 class="text-3xl md:text-4xl font-bold mb-12 text-balance">Air Taxi Advantages</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <?php 
                    $features = [
                        ["title" => "Beat Traffic", "desc" => "Avoid congested highways and surface transportation delays."],
                        ["title" => "On-Demand Availability", "desc" => "Book flights with minimal advance notice for urgent travel."],
                        ["title" => "City Center Access", "desc" => "Depart from and arrive at smaller airfields closer to your destination."],
                        ["title" => "Time Savings", "desc" => "Reduce travel time significantly on mid-range regional distances."],
                        ["title" => "Executive Efficiency", "desc" => "Maximize productivity by minimizing unproductive travel time."],
                        ["title" => "All-Weather Capable", "desc" => "Operate in conditions where ground transport might be hindered."]
                    ];
                    foreach ($features as $f): ?>
                        <div class="flex gap-4">
                            <i data-lucide="check-circle" class="w-6 h-6 text-primary flex-shrink-0 mt-1"></i>
                            <div>
                                <h3 class="text-xl font-bold text-foreground mb-2"><?php echo $f['title']; ?></h3>
                                <p class="text-foreground/70"><?php echo $f['desc']; ?></p>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <!-- CTA -->
            <div class="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/20 text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-4 text-balance">Skip the Traffic with Air Taxi</h2>
                <p class="text-foreground/70 mb-6 max-w-2xl mx-auto">
                    Experience the future of urban and regional mobility with our specialized air taxi services.
                </p>
                <a href="/get-quote.php" class="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-lg">
                    Book Air Taxi
                    <i data-lucide="arrow-right" class="w-5 h-5"></i>
                </a>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
