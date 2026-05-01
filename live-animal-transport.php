<?php 
$pageTitle = "Live Animal Transport Charter - Transafrica Air";
$pageDescription = "Safe and humane transportation of livestock and animals across Africa with specialized climate control and expert veterinary care.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Live Animal Transport</h1>
            <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                Safe and humane transportation of livestock and animals with specialized climate control and expert care.
            </p>
        </div>
    </section>

    <!-- Services -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div class="p-8 bg-white rounded-xl shadow-sm border-t-4 border-primary">
                    <h3 class="text-xl font-bold mb-4">Climate Control</h3>
                    <p class="text-slate-500 text-sm">Temperature and humidity controlled environments for optimal animal health maintenance.</p>
                </div>
                <div class="p-8 bg-white rounded-xl shadow-sm border-t-4 border-primary">
                    <h3 class="text-xl font-bold mb-4">Veterinary Support</h3>
                    <p class="text-slate-500 text-sm">Access to licensed veterinary professionals and emergency protocols for all shipments.</p>
                </div>
                <div class="p-8 bg-white rounded-xl shadow-sm border-t-4 border-primary">
                    <h3 class="text-xl font-bold mb-4">Direct Routing</h3>
                    <p class="text-slate-500 text-sm">Minimal transit time and handling to reduce stress and ensure animal welfare.</p>
                </div>
            </div>

            <div class="bg-slate-50 p-10 rounded-3xl">
                <h2 class="text-3xl font-bold mb-8 text-center">Specialized Animal Transport</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <i data-lucide="check-circle" class="text-primary w-5 h-5"></i>
                        <span>Livestock Transportation</span>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <i data-lucide="check-circle" class="text-primary w-5 h-5"></i>
                        <span>Exotic Animal Relocation</span>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <i data-lucide="check-circle" class="text-primary w-5 h-5"></i>
                        <span>Zoo & Wildlife Transfers</span>
                    </div>
                    <div class="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm">
                        <i data-lucide="check-circle" class="text-primary w-5 h-5"></i>
                        <span>Agricultural Shipments</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
