<?php 
$pageTitle = "Terms & Conditions - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$sections = [
    [
        'id' => 1,
        'title' => 'Agreement to Terms',
        'content' => 'These Terms and Conditions constitute a legally binding agreement between you and Transafrican Air Limited. By accessing our website, you agree to be bound by these terms.'
    ],
    [
        'id' => 2,
        'title' => 'Use License',
        'content' => 'Permission is granted to temporarily download materials for personal, non-commercial viewing only. You may not modify, copy, or use materials for commercial purposes without consent.',
        'list' => [
            'Modifying or copying materials without authorization',
            'Using materials for commercial or competitive purposes',
            'Attempting to decompile or reverse engineer systems',
            'Removing copyright or proprietary notations'
        ]
    ],
    [
        'id' => 3,
        'title' => 'Limitation of Liability',
        'content' => 'Transafrican Air shall not be liable for any indirect, incidental, or special damages arising from your use of our website or services.'
    ],
    [
        'id' => 4,
        'title' => 'Governing Law',
        'content' => 'These Terms are governed by the laws of the Republic of Kenya. You submit to the exclusive jurisdiction of the courts located in Nairobi.'
    ]
];
?>

<main class="min-h-screen bg-background text-foreground">
    <section class="bg-primary text-white py-12 md:py-16">
        <div class="container mx-auto px-4 text-center">
            <h1 class="text-4xl md:text-5xl font-bold mb-4">Terms & Conditions</h1>
            <p class="text-lg opacity-90 max-w-2xl mx-auto">Please read our terms carefully before using Transafrican Air services.</p>
        </div>
    </section>

    <section class="py-12 md:py-16">
        <div class="container mx-auto px-4 max-w-4xl space-y-6">
            <?php foreach ($sections as $section): ?>
                <div class="bg-white rounded-xl shadow border p-8">
                    <h3 class="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                        <span class="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center text-sm"><?php echo $section['id']; ?></span>
                        <?php echo $section['title']; ?>
                    </h3>
                    <p class="text-slate-600 leading-relaxed mb-4"><?php echo $section['content']; ?></p>
                    <?php if (isset($section['list'])): ?>
                        <ul class="space-y-2 ml-4">
                            <?php foreach ($section['list'] as $item): ?>
                                <li class="flex items-start gap-2 text-slate-600">
                                    <span class="text-primary font-bold">•</span>
                                    <span><?php echo $item; ?></span>
                                </li>
                            <?php endforeach; ?>
                        </ul>
                    <?php endif; ?>
                </div>
            <?php endforeach; ?>

            <div class="bg-slate-50 border p-6 rounded-xl text-center">
                <p class="mb-6">Questions about these Terms? Contact our legal team.</p>
                <a href="mailto:info@transafricanair.com" class="font-bold text-primary hover:underline">info@transafricanair.com</a>
            </div>
        </div>
    </section>
</main>

<?php include 'includes/footer.php'; ?>
