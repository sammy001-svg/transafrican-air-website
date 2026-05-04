<?php 
$pageTitle = "Services - Transafrican Air";
$pageDescription = "Comprehensive air cargo solutions for government, humanitarian, and commercial needs";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Page Header -->
    <section class="relative text-white py-16 md:py-24 overflow-hidden -mt-16" style="background-image: url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bknavtshny11ycgukdv5-HFmuSmTLUibwd8cNMvsVw27TtTZn5T.jpeg'); background-size: cover; background-position: center;">
        <div class="absolute inset-0 bg-black/50"></div>
        <div class="container mx-auto px-4 relative z-10">
            <h1 class="text-4xl md:text-5xl font-bold mb-4 text-balance">Services</h1>
            <p class="text-lg md:text-xl text-gray-200 max-w-2xl">
                Comprehensive air cargo solutions designed to meet the diverse needs of government institutions, humanitarian organizations, and commercial partners.
            </p>
        </div>
    </section>

    <!-- Services Grid -->
    <section class="py-16 md:py-24 bg-background">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <!-- Group Charter -->
                <a href="/group-charter.php" class="group">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/plane-203.jpg" alt="Group Charter" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <div class="flex items-start gap-3 mb-3">
                                <i data-lucide="plane" class="w-6 h-6 text-primary flex-shrink-0 mt-1"></i>
                                <h3 class="text-xl font-bold text-foreground">Group Charter</h3>
                            </div>
                            <p class="text-foreground/70 text-sm leading-relaxed">
                                Professional group charter services for personnel logistics, emergency response, and series charters with flexible scheduling.
                            </p>
                        </div>
                    </div>
                </a>

                <!-- Private Charters -->
                <a href="/private-jet-charter.php" class="group">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                        <div class="h-48 overflow-hidden">
                            <img src="/images/private-jet-hangar.jpg" alt="Private Charters" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <div class="flex items-start gap-3 mb-3">
                                <i data-lucide="plane" class="w-6 h-6 text-primary flex-shrink-0 mt-1"></i>
                                <h3 class="text-xl font-bold text-foreground">Private Charters</h3>
                            </div>
                            <p class="text-foreground/70 text-sm leading-relaxed">
                                Exclusive aircraft charter solutions for executives, groups, and emergency situations with complete flexibility and premium service.
                            </p>
                        </div>
                    </div>
                </a>

                <!-- Cargo Charters -->
                <a href="/cargo-charters.php" class="group">
                    <div class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full">
                        <div class="h-48 overflow-hidden">
                            <img src="/public/images/transafrican-cargo-aircraft.jpg" alt="Cargo Charters" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300">
                        </div>
                        <div class="p-6">
                            <div class="flex items-start gap-3 mb-3">
                                <i data-lucide="package" class="w-6 h-6 text-primary flex-shrink-0 mt-1"></i>
                                <h3 class="text-xl font-bold text-foreground">Cargo Charters</h3>
                            </div>
                            <p class="text-foreground/70 text-sm leading-relaxed">
                                Fast and reliable cargo charter solutions for urgent shipments, dangerous goods, heavy cargo, and humanitarian aid operations.
                            </p>
                        </div>
                    </div>
                </a>
            </div>

            <!-- Why Choose Us -->
            <div class="bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/20">
                <h2 class="text-3xl md:text-4xl font-bold mb-8 text-balance">Why Choose Transafrican Air?</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                        <h4 class="text-xl font-bold text-primary mb-3">Reliability & Trust</h4>
                        <p class="text-foreground/80 leading-relaxed">
                            With years of experience serving government and humanitarian organizations, we understand the critical nature of your cargo operations.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-primary mb-3">Global Network</h4>
                        <p class="text-foreground/80 leading-relaxed">
                            Our extensive network of interline partners ensures seamless connectivity and coverage across Africa and beyond.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-primary mb-3">Flexible Solutions</h4>
                        <p class="text-foreground/80 leading-relaxed">
                            From scheduled services to ad-hoc charters, we offer tailored solutions that fit your specific operational needs.
                        </p>
                    </div>
                    <div>
                        <h4 class="text-xl font-bold text-primary mb-3">Expertise & Support</h4>
                        <p class="text-foreground/80 leading-relaxed">
                            Our dedicated team provides comprehensive support throughout your cargo journey, ensuring smooth operations every step of the way.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="py-16 md:py-24 bg-primary text-white">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl md:text-4xl font-bold mb-6 text-balance">Ready to Partner with Us?</h2>
            <p class="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Contact our team today to discuss your air cargo needs and discover how we can support your operations.
            </p>
            <a href="/get-quote.php" class="inline-flex items-center bg-black text-white px-8 py-3 rounded font-bold hover:opacity-90 transition shadow-xl gap-2">
                Get A Quote
                <i data-lucide="arrow-right" class="w-5 h-5"></i>
            </a>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
