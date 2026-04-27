<?php 
$pageTitle = "Company Profile - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Hero Section -->
    <section class="relative py-20 md:py-32 bg-slate-900 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-30">
            <img src="/public/images/private-jet-hangar.jpg" class="w-full h-full object-cover">
        </div>
        <div class="container mx-auto px-4 relative z-10 text-center">
            <h1 class="text-4xl md:text-6xl font-bold mb-6">Company Profile</h1>
            <p class="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
                Empowering African connectivity through specialized aviation solutions, cargo logistics, and premium passenger charters.
            </p>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-16">
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-primary">Our Mission</h2>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        To provide safe, reliable, and efficient air transport solutions tailored to the unique challenges of the African continent. We strive to support humanitarian efforts, government missions, and commercial growth through excellence in aviation.
                    </p>
                </div>
                <div class="space-y-6">
                    <h2 class="text-3xl font-bold text-primary">Our Vision</h2>
                    <p class="text-lg text-slate-600 leading-relaxed">
                        To be the leading specialist aviation partner in Africa, recognized for our operational integrity, rapid response capabilities, and commitment to connecting inaccessible regions with the rest of the world.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- Core Values -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-16">Our Core Values</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div class="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary">
                    <i data-lucide="shield-check" class="w-12 h-12 text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Safety First</h3>
                    <p class="text-slate-600">Uncompromising commitment to international safety standards and rigorous maintenance protocols.</p>
                </div>
                <div class="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary">
                    <i data-lucide="award" class="w-12 h-12 text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Operational Excellence</h3>
                    <p class="text-slate-600">Precision in every flight, ensuring timely delivery even in the most challenging environments.</p>
                </div>
                <div class="bg-white p-10 rounded-2xl shadow-sm border-t-4 border-primary">
                    <i data-lucide="handshake" class="w-12 h-12 text-primary mb-6"></i>
                    <h3 class="text-xl font-bold mb-4">Integrity</h3>
                    <p class="text-slate-600">Building lasting relationships through transparency, reliability, and ethical business practices.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Operational Footprint -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="flex flex-col md:flex-row gap-12 items-center">
                <div class="md:w-1/2">
                    <img src="/public/images/transafrican-cargo-aircraft.jpg" class="rounded-3xl shadow-2xl">
                </div>
                <div class="md:w-1/2 space-y-6">
                    <h2 class="text-3xl font-bold text-primary">Strategic Operational Footprint</h2>
                    <p class="text-slate-600 leading-relaxed">
                        Headquartered at Jomo Kenyatta International Airport (JKIA) in Nairobi, Kenya, we occupy a strategic gateway to the rest of Africa. Our expertise spans across East, Central, and Western Africa, providing critical support for:
                    </p>
                    <ul class="space-y-4">
                        <li class="flex items-center gap-3"><i data-lucide="check-circle" class="text-primary w-5 h-5"></i> Humanitarian Aid & Relief</li>
                        <li class="flex items-center gap-3"><i data-lucide="check-circle" class="text-primary w-5 h-5"></i> Government & Diplomatic Charters</li>
                        <li class="flex items-center gap-3"><i data-lucide="check-circle" class="text-primary w-5 h-5"></i> Specialized Air Cargo Logistics</li>
                    </ul>
                    <div class="pt-6">
                        <a href="/contact-us.php" class="bg-primary text-white px-10 py-4 rounded-full font-bold shadow-lg hover:scale-105 transition-transform inline-block">Partner With Us</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
