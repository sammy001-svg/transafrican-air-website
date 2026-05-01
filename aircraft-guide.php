<?php 
$pageTitle = "Aircraft Guide - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$aircraftCategories = [
    [
        "id" => "cargo",
        "title" => "Cargo Aircraft",
        "description" => "Specialized aircraft for transporting goods, equipment, and freight across Africa and beyond.",
        "image" => "/public/images/cargo-loading.jpg",
        "features" => ["High payload capacity", "Wide cargo doors", "Temperature controlled", "Quick turnaround"]
    ],
    [
        "id" => "private-jets",
        "title" => "Private Aircrafts",
        "description" => "Executive and luxury aircraft for business travel and private charters with premium comfort.",
        "image" => "/public/images/private-aircraft-flight.jpg",
        "features" => ["Luxury seating", "Point-to-point routes", "VIP privacy", "Flexible scheduling"]
    ],
    [
        "id" => "passenger",
        "title" => "Group Aircraft",
        "description" => "Modern commercial airliners for group charters and scheduled passenger services.",
        "image" => "/public/images/regional-bush-aircraft.jpg",
        "features" => ["50+ passenger capacity", "Full service amenities", "Multi-class configuration", "Advanced safety"]
    ]
];
?>

<main class="min-h-screen bg-background text-foreground">
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Aircraft Guide</h1>
                <p class="text-lg text-slate-600 max-w-3xl">
                    Each aircraft category is specifically equipped and configured to meet the unique demands of different charter operations.
                </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php foreach ($aircraftCategories as $aircraft): ?>
                    <div class="bg-white rounded-2xl shadow-lg border overflow-hidden hover:shadow-xl transition flex flex-col">
                        <div class="h-48 overflow-hidden">
                            <img src="<?php echo $aircraft['image']; ?>" class="w-full h-full object-cover">
                        </div>
                        <div class="p-8 flex flex-col grow">
                            <h3 class="text-xl font-bold mb-4"><?php echo $aircraft['title']; ?></h3>
                            <p class="text-slate-500 mb-6 grow"><?php echo $aircraft['description']; ?></p>
                            
                            <ul class="space-y-2 mb-8">
                                <?php foreach ($aircraft['features'] as $feature): ?>
                                    <li class="flex items-center gap-2 text-sm font-medium">
                                        <i data-lucide="check-circle" class="w-4 h-4 text-primary"></i>
                                        <?php echo $feature; ?>
                                    </li>
                                <?php endforeach; ?>
                            </ul>

                            <a href="/get-quote.php" class="bg-primary text-white text-center py-3 rounded-lg font-bold hover:opacity-90 transition">
                                Request for Quote
                            </a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
