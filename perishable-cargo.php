<?php 
$pageTitle = "Perishable Cargo Charter - Transafrica Air";
$pageDescription = "Speed and precision for fresh produce, flowers, and seafood. We ensure your perishable cargo reaches its destination fresh and on time.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Perishable Cargo</h1>
            <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                Ensuring freshness through speed and precision. Specialized logistics for flowers, fresh produce, and seafood across the continent.
            </p>
        </div>
    </section>

    <section class="py-16">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold">Cold Chain Excellence</h2>
                    <p class="text-slate-600">We understand that with perishable goods, time is the most critical factor. Our team coordinates every step to minimize exposure and ensure rapid delivery.</p>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-primary"></i> Temperature Monitoring</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-primary"></i> Priority Ground Handling</li>
                        <li class="flex items-center gap-3"><i data-lucide="check" class="text-primary"></i> Rapid Transit Times</li>
                    </ul>
                </div>
                <div class="bg-slate-50 p-8 rounded-2xl">
                    <h3 class="text-xl font-bold mb-6">Industries Served</h3>
                    <div class="grid grid-cols-2 gap-4 text-sm">
                        <div class="bg-white p-4 rounded-lg shadow-sm">Fresh Flowers</div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">Seafood & Fish</div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">Fruits & Veg</div>
                        <div class="bg-white p-4 rounded-lg shadow-sm">Meat Products</div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
