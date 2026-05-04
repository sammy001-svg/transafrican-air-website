<?php 
$pageTitle = "Private Jets Guide - Transafrican Air";
$pageDescription = "A comprehensive guide to our private jet fleet, categories, and luxury travel options.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Private Jets Guide</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl">
                Explore the different categories of private aircraft available for your next mission.
            </p>
        </div>
    </section>

    <!-- Content -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold">Light Jets</h2>
                    <p class="text-foreground/70 leading-relaxed">
                        Light jets are the ideal choice for short to mid-range flights. With a capacity of up to 7 passengers and a range of approximately 1,500 miles, they provide a cost-effective solution for regional travel without compromising on luxury.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> Perfect for 1-3 hour flights</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> Access to smaller airports</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> Efficient and rapid travel</li>
                    </ul>
                </div>
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold">Midsize & Super Midsize</h2>
                    <p class="text-foreground/70 leading-relaxed">
                        Offering more cabin space, stand-up headroom, and a longer range, midsize jets are suitable for transcontinental flights. They typically accommodate 7-9 passengers and feature enhanced amenities such as a galley and enclosed lavatory.
                    </p>
                    <ul class="space-y-2">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> 4-5 hour flight range</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> Increased baggage capacity</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-primary"></i> Full-size cabin service</li>
                    </ul>
                </div>
            </div>

            <!-- CTA -->
            <div class="bg-slate-50 border rounded-3xl p-12 text-center">
                <h2 class="text-2xl md:text-3xl font-bold mb-6">Need Help Choosing the Right Jet?</h2>
                <p class="text-slate-600 mb-8 max-w-2xl mx-auto">Our charter experts are available 24/7 to help you select the perfect aircraft for your specific itinerary and passenger requirements.</p>
                <a href="/contact-us.php" class="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Consult an Expert</a>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
