<?php 
$pageTitle = "Humanitarian Aid Charter - Transafrica Air";
$pageDescription = "Emergency support and rapid delivery of relief supplies in crisis situations across Africa. Partnering with NGOs and relief agencies.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-16 md:py-24">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Humanitarian Aid Charter</h1>
            <p class="text-lg md:text-xl opacity-90 max-w-2xl">
                Emergency support and rapid delivery of relief supplies in crisis situations. Delivering hope when it matters most.
            </p>
        </div>
    </section>

    <!-- Content -->
    <section class="py-16 md:py-24">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div class="space-y-8">
                    <h2 class="text-3xl font-bold">Delivering Relief Operations</h2>
                    <p class="text-slate-600 leading-relaxed">
                        We work with governments, NGOs, and aid agencies to quickly deliver relief operations with our specialist knowledge and regional connections. When disaster strikes, speed and reliability are critical.
                    </p>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div class="p-6 bg-slate-50 rounded-xl">
                            <i data-lucide="zap" class="text-primary mb-4 w-8 h-8"></i>
                            <h4 class="font-bold">Emergency Response</h4>
                            <p class="text-sm text-slate-500">Rapid deployment within hours of a crisis.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl">
                            <i data-lucide="heart" class="text-primary mb-4 w-8 h-8"></i>
                            <h4 class="font-bold">NGO Support</h4>
                            <p class="text-sm text-slate-500">Working with established relief organizations.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl">
                            <i data-lucide="globe" class="text-primary mb-4 w-8 h-8"></i>
                            <h4 class="font-bold">Global Network</h4>
                            <p class="text-sm text-slate-500">Access to aircraft and logistics worldwide.</p>
                        </div>
                        <div class="p-6 bg-slate-50 rounded-xl">
                            <i data-lucide="users" class="text-primary mb-4 w-8 h-8"></i>
                            <h4 class="font-bold">Team Deployment</h4>
                            <p class="text-sm text-slate-500">Transport for medical staff and rescue teams.</p>
                        </div>
                    </div>
                </div>

                <div class="bg-primary/5 p-10 rounded-3xl border border-primary/20 space-y-8">
                    <h3 class="text-2xl font-bold">What We Transport</h3>
                    <ul class="space-y-6">
                        <li class="flex gap-4">
                            <i data-lucide="plus-square" class="text-primary w-6 h-6 shrink-0"></i>
                            <div>
                                <h4 class="font-bold">Medical Supplies</h4>
                                <p class="text-sm text-slate-500">Medicines, vaccines, and diagnostic equipment.</p>
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <i data-lucide="droplets" class="text-primary w-6 h-6 shrink-0"></i>
                            <div>
                                <h4 class="font-bold">Food & Water</h4>
                                <p class="text-sm text-slate-500">Emergency rations and clean drinking water.</p>
                            </div>
                        </li>
                        <li class="flex gap-4">
                            <i data-lucide="home" class="text-primary w-6 h-6 shrink-0"></i>
                            <div>
                                <h4 class="font-bold">Shelter Materials</h4>
                                <p class="text-sm text-slate-500">Tents, blankets, and temporary housing kits.</p>
                            </div>
                        </li>
                    </ul>
                    <div class="pt-6">
                        <a href="/contact-us.php" class="block text-center bg-primary text-white py-4 rounded-full font-bold shadow-lg">Request Emergency Support</a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
