<?php 
$pageTitle = "Careers - Join Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$jobOpenings = [
    [
        "title" => "Flight Operations",
        "location" => "Nairobi, Kenya",
        "description" => "Lead our flight operations team with expertise in scheduling, compliance, and crew management across African routes.",
        "requirements" => ["Commercial pilot license or operations experience", "5+ years in aviation", "Knowledge of African airspace regulations"]
    ],
    [
        "title" => "Engineering",
        "location" => "Nairobi, Kenya",
        "description" => "Maintain and optimize our diverse aircraft fleet with cutting-edge maintenance and engineering expertise.",
        "requirements" => ["Aircraft maintenance certification", "Troubleshooting expertise", "Component overhaul experience"]
    ],
    [
        "title" => "Cargo Logistics",
        "location" => "Nairobi, Kenya",
        "description" => "Manage cargo operations, logistics planning, and supply chain optimization for time-critical deliveries.",
        "requirements" => ["Logistics management background", "Customs and import/export knowledge", "Warehouse management systems"]
    ],
    [
        "title" => "Commercial Sales",
        "location" => "Nairobi, Kenya",
        "description" => "Drive revenue growth by building relationships with corporate clients, freight forwarders, and government agencies.",
        "requirements" => ["B2B sales experience", "Aviation or logistics background", "Strong negotiation skills"]
    ]
];
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
        <div class="container mx-auto px-4 text-center mb-16">
            <h2 class="text-2xl md:text-3xl font-bold mb-12">Why Work With Us</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
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

    <!-- Open Positions -->
    <section class="py-16">
        <div class="container mx-auto px-4">
            <h2 class="text-2xl md:text-3xl font-bold mb-12">Open Positions</h2>
            <div class="space-y-8">
                <?php foreach ($jobOpenings as $job): ?>
                    <div class="bg-white border rounded-2xl p-8 hover:shadow-xl transition flex flex-col md:flex-row gap-8">
                        <div class="md:w-1/3">
                            <h3 class="text-2xl font-bold mb-2"><?php echo $job['title']; ?></h3>
                            <div class="flex items-center gap-2 text-slate-400 text-sm mb-4">
                                <i data-lucide="map-pin" class="w-4 h-4"></i>
                                <?php echo $job['location']; ?>
                            </div>
                        </div>
                        <div class="grow">
                            <p class="text-slate-600 mb-6"><?php echo $job['description']; ?></p>
                            <h4 class="font-bold text-sm uppercase text-slate-400 mb-3 tracking-widest">Requirements:</h4>
                            <ul class="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                                <?php foreach ($job['requirements'] as $req): ?>
                                    <li class="flex items-center gap-2 text-sm text-slate-500"><i data-lucide="check-circle-2" class="w-4 h-4 text-primary"></i> <?php echo $req; ?></li>
                                <?php endforeach; ?>
                            </ul>
                            <a href="mailto:careers@transafricanair.com" class="bg-primary text-white px-8 py-3 rounded-full font-bold hover:opacity-90 transition inline-flex items-center gap-2">Apply Now <i data-lucide="arrow-right" class="w-4 h-4"></i></a>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
