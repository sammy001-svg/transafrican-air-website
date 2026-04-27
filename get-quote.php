<?php 
$pageTitle = "Get A Quote - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$countryCodes = [
    ["code" => "+254", "country" => "Kenya"],
    ["code" => "+255", "country" => "Tanzania"],
    ["code" => "+256", "country" => "Uganda"],
    ["code" => "+250", "country" => "Rwanda"],
    ["code" => "+251", "country" => "Ethiopia"],
    ["code" => "+27", "country" => "South Africa"],
    ["code" => "+44", "country" => "United Kingdom"],
    ["code" => "+1", "country" => "USA/Canada"],
    ["code" => "+971", "country" => "UAE"],
    ["code" => "+91", "country" => "India"]
];
?>

<main class="min-h-screen bg-background text-foreground py-16 md:py-24">
    <div class="container mx-auto px-4">
        <div class="max-w-4xl mx-auto">
            <div class="mb-12">
                <h1 class="text-4xl md:text-5xl font-bold mb-4 text-primary">Get Your Quote</h1>
                <p class="text-lg text-slate-600">
                    Fill out the form below to receive a personalized quote for your charter requirements. Our team will respond within 24 hours.
                </p>
            </div>

            <form action="#" method="POST" class="bg-white rounded-2xl shadow-xl border p-8 space-y-8">
                <!-- Trip Details -->
                <div class="space-y-6">
                    <h2 class="text-xl font-bold border-b pb-2">Trip Information</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Trip Type</label>
                            <select name="tripType" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                                <option value="one-way">One Way</option>
                                <option value="round-trip">Round Trip</option>
                                <option value="multi-leg">Multi-Leg</option>
                                <option value="cargo">Cargo</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Charter Service</label>
                            <select name="charterService" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                                <option value="group">Group Charter</option>
                                <option value="private">Private Jet</option>
                                <option value="cargo">Cargo Charter</option>
                                <option value="medical">Medical Evacuation</option>
                            </select>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Departure City/Airport</label>
                            <input type="text" name="departure" placeholder="Where from?" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Arrival City/Airport</label>
                            <input type="text" name="arrival" placeholder="Where to?" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Departure Date</label>
                            <input type="date" name="date" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Passengers / Cargo Weight</label>
                            <input type="text" name="load" placeholder="e.g. 10 People or 5 Tons" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                        </div>
                    </div>
                </div>

                <!-- Contact Details -->
                <div class="space-y-6">
                    <h2 class="text-xl font-bold border-b pb-2">Contact Person</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Full Name</label>
                            <input type="text" name="name" placeholder="John Doe" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Email Address</label>
                            <input type="email" name="email" placeholder="john@example.com" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                        </div>
                    </div>

                    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label class="block text-sm font-semibold mb-2">Phone Number</label>
                            <div class="flex gap-2">
                                <select name="countryCode" class="w-1/3 px-2 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                                    <?php foreach ($countryCodes as $country): ?>
                                        <option value="<?php echo $country['code']; ?>"><?php echo $country['code'] . ' (' . $country['country'] . ')'; ?></option>
                                    <?php endforeach; ?>
                                </select>
                                <input type="tel" name="phone" placeholder="712 345 678" class="w-2/3 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none" required>
                            </div>
                        </div>
                        <div>
                            <label class="block text-sm font-semibold mb-2">Preferred Contact Method</label>
                            <select name="contactMethod" class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none">
                                <option value="email">Email</option>
                                <option value="phone">Phone Call</option>
                                <option value="whatsapp">WhatsApp</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div>
                    <label class="block text-sm font-semibold mb-2">Additional Requirements</label>
                    <textarea name="comments" rows="4" placeholder="Special luggage, catering, ground transport, etc." class="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary/20 outline-none"></textarea>
                </div>

                <div class="pt-4">
                    <button type="submit" class="w-full bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-lg hover:shadow-primary/20 hover:-translate-y-1 transition duration-300">
                        Submit Quote Request
                    </button>
                </div>
            </form>
        </div>
    </div>
</main>

<?php include 'includes/footer.php'; ?>
