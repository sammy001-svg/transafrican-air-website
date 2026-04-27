<?php 
$pageTitle = "Wildlife & Safari Adventure Charters - Transafrican Air";
$pageDescription = "Experience Africa's spectacular wildlife with custom charter flights. Direct access to remote safari lodges and prime viewing locations.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold">Wildlife & Safari Adventure Charters</h1>
                    <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                        Experience Africa's most spectacular wildlife destinations with custom charter flights. Direct access to remote lodges, prime viewing locations, and unforgettable safari adventures.
                    </p>
                    <a href="/contact-us.php" class="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Request a Quote</a>
                </div>
                <div class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src="/public/images/regional-bush-aircraft.jpg" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Why Charter -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Why Charter for Your Safari?</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="compass" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Remote Access</h3>
                        <p class="text-slate-500 text-sm">Fly directly to remote safari lodges and conservation areas unreachable by commercial flights.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="camera" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Prime Viewing</h3>
                        <p class="text-slate-500 text-sm">Time your safari perfectly with flexible scheduling for optimal wildlife viewing patterns.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="users" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Group Packages</h3>
                        <p class="text-slate-500 text-sm">Charter flights for adventure groups, photography expeditions, and families.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="shield" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Professional Support</h3>
                        <p class="text-slate-500 text-sm">Experienced pilots familiar with remote safari routes and bush airstrips.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Featured Destinations -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Featured Safari Destinations</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <?php 
                $destinations = [
                    ["name" => "Serengeti Migration", "desc" => "Witness the iconic wildebeest migration in Tanzania."],
                    ["name" => "Masai Mara", "desc" => "Experience Kenya's premier wildlife reserve."],
                    ["name" => "Okavango Delta", "desc" => "Explore Botswana's pristine water-based ecosystem."],
                    ["name" => "Victoria Falls", "desc" => "Combine adventure with wildlife viewing in Zimbabwe."]
                ];
                foreach ($destinations as $d):
                ?>
                <div class="bg-white p-6 rounded-lg text-center shadow-sm border">
                    <h4 class="font-bold mb-3"><?php echo $d['name']; ?></h4>
                    <p class="text-slate-500 text-xs"><?php echo $d['desc']; ?></p>
                </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
