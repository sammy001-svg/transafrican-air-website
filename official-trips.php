<?php 
$pageTitle = "Official Delegation & Government Charters - Transafrican Air";
$pageDescription = "Professional aircraft charter services for government delegations, diplomatic missions, and official travel across Africa.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div class="space-y-6">
                    <h1 class="text-4xl md:text-5xl font-bold">Official Delegation & Government Charters</h1>
                    <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                        Professional aircraft charter services for government delegations, diplomatic missions, and official travel. Security, protocol, and reliability you can depend on.
                    </p>
                    <a href="/contact-us.php" class="bg-white text-primary px-10 py-4 rounded-full font-bold shadow-xl hover:scale-105 transition-transform inline-block">Request Official Transport</a>
                </div>
                <div class="relative h-80 md:h-96 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                    <img src="/public/images/private-aircraft-flight.jpg" class="w-full h-full object-cover">
                </div>
            </div>
        </div>
    </section>

    <!-- Standards -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl md:text-4xl font-bold mb-16 text-center">Government-Grade Service Standards</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="shield" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Protocol Compliance</h3>
                        <p class="text-slate-500 text-sm">Full adherence to diplomatic protocols, government regulations, and security requirements.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="lock" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Confidentiality</h3>
                        <p class="text-slate-500 text-sm">Discretion guaranteed with secure communications and restricted access procedures.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="clock" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Reliability</h3>
                        <p class="text-slate-500 text-sm">Mission-critical scheduling with backup contingencies and real-time coordination.</p>
                    </div>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border hover:shadow-md transition flex gap-6">
                    <i data-lucide="users" class="w-10 h-10 text-primary shrink-0"></i>
                    <div>
                        <h3 class="text-xl font-bold mb-2">Professional Crew</h3>
                        <p class="text-slate-500 text-sm">Experienced personnel trained in protocol, discretion, and government travel requirements.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Official Travel Solutions</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div class="bg-white p-6 rounded-lg text-center">
                    <h4 class="font-bold mb-3">Government Delegations</h4>
                    <p class="text-slate-500 text-xs text-balance">Official state visits and ministerial missions requiring secure transport.</p>
                </div>
                <div class="bg-white p-6 rounded-lg text-center">
                    <h4 class="font-bold mb-3">Diplomatic Missions</h4>
                    <p class="text-slate-500 text-xs text-balance">Embassy operations and international negotiations with confidential support.</p>
                </div>
                <div class="bg-white p-6 rounded-lg text-center">
                    <h4 class="font-bold mb-3">Official Events</h4>
                    <p class="text-slate-500 text-xs text-balance">State ceremonies and government events requiring coordinated logistics.</p>
                </div>
                <div class="bg-white p-6 rounded-lg text-center">
                    <h4 class="font-bold mb-3">Regional Travel</h4>
                    <p class="text-slate-500 text-xs text-balance">Travel between African nations for official purposes with seamless coordination.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
