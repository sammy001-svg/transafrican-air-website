<?php 
$pageTitle = "Cargo Guide - Transafrican Air";
$pageDescription = "Comprehensive guide for shipping cargo with Transafrican Air, including requirements and best practices.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">Cargo Shipping Guide</h1>
            <p class="text-lg md:text-xl text-white/90 max-w-2xl">
                Everything you need to know about transporting goods with Transafrican Air.
            </p>
        </div>
    </section>

    <!-- Main Content -->
    <section class="py-16 md:py-24 bg-background">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
                <!-- Sidebar Navigation -->
                <div class="md:col-span-1 space-y-4">
                    <div class="bg-white rounded-lg shadow-md p-6 sticky top-24 border border-slate-200">
                        <h3 class="font-bold mb-4 text-primary uppercase text-sm tracking-widest">Guide Sections</h3>
                        <ul class="space-y-3">
                            <li><a href="#booking" class="text-foreground/70 hover:text-primary transition flex items-center gap-2"><i data-lucide="chevron-right" class="w-4 h-4"></i> Booking Process</a></li>
                            <li><a href="#documentation" class="text-foreground/70 hover:text-primary transition flex items-center gap-2"><i data-lucide="chevron-right" class="w-4 h-4"></i> Documentation</a></li>
                            <li><a href="#packaging" class="text-foreground/70 hover:text-primary transition flex items-center gap-2"><i data-lucide="chevron-right" class="w-4 h-4"></i> Packaging & Labeling</a></li>
                            <li><a href="#dangerous-goods" class="text-foreground/70 hover:text-primary transition flex items-center gap-2"><i data-lucide="chevron-right" class="w-4 h-4"></i> Dangerous Goods</a></li>
                            <li><a href="#tracking" class="text-foreground/70 hover:text-primary transition flex items-center gap-2"><i data-lucide="chevron-right" class="w-4 h-4"></i> Tracking</a></li>
                        </ul>
                    </div>
                </div>

                <!-- Guide Content -->
                <div class="md:col-span-2 space-y-16">
                    <div id="booking" class="space-y-4">
                        <h2 class="text-3xl font-bold text-foreground">1. Booking Process</h2>
                        <p class="text-foreground/70 leading-relaxed">
                            Booking a cargo shipment with Transafrican Air is straightforward. You can start by requesting a quote through our website or contacting our 24/7 operations center. Once you approve the quote, we will assign a dedicated load coordinator to manage your shipment from origin to destination.
                        </p>
                    </div>

                    <div id="documentation" class="space-y-4">
                        <h2 class="text-3xl font-bold text-foreground">2. Documentation</h2>
                        <p class="text-foreground/70 leading-relaxed">
                            Proper documentation is essential for seamless customs clearance and transport. Required documents typically include:
                        </p>
                        <ul class="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                            <li>Air Waybill (AWB)</li>
                            <li>Commercial Invoice</li>
                            <li>Packing List</li>
                            <li>Certificate of Origin</li>
                            <li>Shipper's Declaration for Dangerous Goods (if applicable)</li>
                        </ul>
                    </div>

                    <div id="packaging" class="space-y-4">
                        <h2 class="text-3xl font-bold text-foreground">3. Packaging & Labeling</h2>
                        <p class="text-foreground/70 leading-relaxed">
                            Ensuring your cargo is correctly packaged and labeled prevents damage and delays. All shipments must be clearly labeled with origin and destination details, handling instructions, and any relevant safety symbols.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
