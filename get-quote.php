<?php 
$pageTitle = "Get a Quote - Transafrican Air";
$pageDescription = "Request a personalized quote for your aircraft charter or cargo requirements. Our team responds within 24 hours.";
include 'includes/header.php'; 
include 'includes/navbar.php'; 
?>

<main class="min-h-screen bg-background text-foreground py-16 md:py-24">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4">Request Your Charter Quote</h1>
                <p class="text-lg text-slate-600">
                    Fill out the form below to receive a personalized quote for your aircraft charter or cargo requirements. Our team will respond within 24 hours.
                </p>
            </div>

            <div class="bg-white rounded-3xl shadow-xl border p-8 md:p-12">
                <form action="/process-form.php" method="POST" class="space-y-8">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <!-- Full Name -->
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Full Name *</label>
                            <input type="text" name="name" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="John Doe">
                        </div>
                        <!-- Email -->
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Email Address *</label>
                            <input type="email" name="email" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="john@example.com">
                        </div>
                        <!-- Phone -->
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Phone Number</label>
                            <input type="tel" name="phone" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="+254 700 000 000">
                        </div>
                        <!-- Charter Type -->
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Charter Type *</label>
                            <select name="type" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition">
                                <option value="private">Private Jet</option>
                                <option value="cargo">Air Cargo</option>
                                <option value="humanitarian">Humanitarian Aid</option>
                                <option value="official">Official Delegation</option>
                                <option value="helicopter">Helicopter</option>
                                <option value="sports">Sports Team</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Departure Airport *</label>
                            <input type="text" name="from" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="City or ICAO Code">
                        </div>
                        <div class="space-y-2">
                            <label class="font-bold text-sm">Destination Airport *</label>
                            <input type="text" name="to" required class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="City or ICAO Code">
                        </div>
                    </div>

                    <div class="space-y-2">
                        <label class="font-bold text-sm">Additional Requirements</label>
                        <textarea name="message" rows="4" class="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary outline-none transition" placeholder="Tell us about passenger count, cargo weight, or special needs..."></textarea>
                    </div>

                    <button type="submit" class="w-full bg-primary text-white py-4 rounded-xl font-bold shadow-lg hover:bg-red-700 transition transform hover:-translate-y-1">
                        Submit Quote Request
                    </button>
                </form>
            </div>
        </div>
    </div>
</main>

<?php include 'includes/footer.php'; ?>
