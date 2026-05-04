<?php 
$pageTitle = "Careers - Join Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground">
    <!-- Header -->
    <section class="bg-primary text-white py-12 md:py-16">
        <div class="container mx-auto px-4">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Join Transafrican Air</h1>
            <p class="text-lg opacity-90 max-w-2xl">Be part of a dynamic team revolutionizing aviation connectivity across Africa.</p>
        </div>
    </section>

    <!-- Why Join -->
    <section class="py-16 bg-slate-50">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-2xl md:text-3xl font-bold mb-12">Why Work With Us</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
                <div class="bg-white p-8 rounded-xl shadow-sm border">
                    <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"><i data-lucide="users" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold mb-2">Talented Team</h3>
                    <p class="text-slate-500 text-sm">Work alongside aviation professionals committed to excellence.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border">
                    <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"><i data-lucide="briefcase" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold mb-2">Growth</h3>
                    <p class="text-slate-500 text-sm">Advance your career with continuous professional development.</p>
                </div>
                <div class="bg-white p-8 rounded-xl shadow-sm border">
                    <div class="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary"><i data-lucide="globe" class="w-6 h-6"></i></div>
                    <h3 class="text-xl font-bold mb-2">Impact</h3>
                    <p class="text-slate-500 text-sm">Make a real difference in connecting the African continent.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Open Positions (Hidden for now) -->
    <section class="py-16">
        <div class="container mx-auto px-4 text-center">
            <div class="bg-primary/5 p-12 rounded-3xl border border-primary/20 max-w-4xl mx-auto">
                <h2 class="text-2xl md:text-3xl font-bold mb-4">No Current Openings</h2>
                <p class="text-slate-600 mb-8 max-w-2xl mx-auto">
                    While we don't have any specific positions open at this moment, we are always looking for exceptional talent to join our team. 
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <p class="text-slate-500">Send your CV to: <a href="mailto:careers@transafricanair.com" class="text-primary font-bold hover:underline">careers@transafricanair.com</a></p>
                </div>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
