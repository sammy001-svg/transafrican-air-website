<?php 
$pageTitle = "Insights & Articles - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$articles = [
    [
        "image" => "/public/images/regional-bush-aircraft.jpg",
        "title" => "Charter a Private Jet to the British Grand Prix at Silverstone",
        "excerpt" => "The British Grand Prix at Silverstone is one of the most iconic races in the Formula 1 calendar...",
        "date" => "March 12, 2026",
    ],
    [
        "image" => "/public/images/team-aircraft.jpg",
        "title" => "Why Sports Teams Choose Charter Flights",
        "excerpt" => "When it comes to moving professional sports teams, every minute counts and every detail matters...",
        "date" => "March 8, 2026",
    ],
    [
        "image" => "/public/images/regional-bush-aircraft.jpg",
        "title" => "Charter a Private Jet to The Championships, Wimbledon",
        "excerpt" => "Few sporting events match the elegance, tradition, and prestige of The Championships, Wimbledon...",
        "date" => "March 1, 2026",
    ],
    [
        "image" => "/public/images/team-aircraft.jpg",
        "title" => "Top Summer Destinations to visit by Private Jet",
        "excerpt" => "Summer 2025 is set to be one of the most exciting travel seasons in years, with major events...",
        "date" => "February 22, 2026",
    ],
];

$insights = [
    [
        "title" => "African Aviation Industry Growth Trends",
        "excerpt" => "Analyzing the factors driving explosive growth in African aviation and regional connectivity.",
        "date" => "March 8, 2026",
    ],
    [
        "title" => "Sustainable Aviation Fuels: The Future of Flying",
        "excerpt" => "Exploring how sustainable aviation fuels are revolutionizing the industry across Africa.",
        "date" => "March 1, 2026",
    ],
    [
        "title" => "E-Commerce Logistics: Africa's Digital Revolution",
        "excerpt" => "How modern air cargo infrastructure is enabling African e-commerce to compete globally.",
        "date" => "February 22, 2026",
    ],
];
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-12 md:py-16">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Insights & Articles</h1>
            <p class="text-lg opacity-90 max-w-2xl">Explore thought leadership articles about aviation, industry trends, and our vision for African connectivity.</p>
        </div>
    </section>

    <!-- Latest Articles -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold mb-12 text-primary">Latest Articles</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <?php foreach ($articles as $article): ?>
                    <div class="bg-white rounded-xl shadow-lg border overflow-hidden hover:shadow-xl transition flex flex-col group">
                        <div class="h-48 overflow-hidden">
                            <img src="<?php echo $article['image']; ?>" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
                        </div>
                        <div class="p-6 flex flex-col grow">
                            <h3 class="text-base font-bold mb-3 line-clamp-2"><?php echo $article['title']; ?></h3>
                            <p class="text-slate-500 text-sm mb-4 grow"><?php echo $article['excerpt']; ?></p>
                            <span class="text-xs text-slate-400 font-medium"><?php echo $article['date']; ?></span>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>

    <!-- Related Insights -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold mb-12">Related Insights</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <?php foreach ($insights as $insight): ?>
                    <div class="bg-white rounded-xl shadow border p-8 hover:shadow-lg transition">
                        <h3 class="text-xl font-bold mb-4"><?php echo $insight['title']; ?></h3>
                        <p class="text-slate-500 text-sm mb-6 leading-relaxed"><?php echo $insight['excerpt']; ?></p>
                        <div class="flex items-center justify-between">
                            <span class="text-xs text-slate-400 font-medium"><?php echo $insight['date']; ?></span>
                            <a href="#" class="text-primary font-bold text-sm inline-flex items-center gap-2">Read More <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
