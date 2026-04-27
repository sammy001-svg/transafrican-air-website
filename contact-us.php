<?php 
$pageTitle = "Contact Us - Transafrican Air";
include 'includes/header.php'; 
include 'includes/navbar.php'; 

$submitted = false;
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Basic form handling logic
    $submitted = true;
    // In a real scenario, you'd send an email here using mail() or a library
}
?>

<main class="min-h-screen bg-linear-to-b from-background to-muted">
  <!-- Header with Image -->
  <section class="relative overflow-hidden py-8 md:py-12 h-72 md:h-96 bg-primary">
    <div class="container mx-auto px-4 h-full">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0 items-center h-full">
        <div class="text-white space-y-4">
          <h1 class="text-3xl md:text-5xl font-bold">Contact Us</h1>
          <p class="text-sm md:text-lg opacity-90 max-w-xl">We would love to hear from you. Reach out to our team for charters, sales, or any inquiries.</p>
        </div>
        <div class="hidden md:block relative h-full">
          <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/contact%20us%202-MBUbE8cGU1yXrzgZ68fAZToDEqJ6n6.jpg" alt="Contact Support" class="w-full h-full object-cover rounded-lg">
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Form Section -->
  <section class="py-16 md:py-24">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Form -->
        <div class="bg-white rounded-lg shadow-lg p-8">
          <?php if ($submitted): ?>
            <div class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-8">
              <p class="font-bold">Message Sent!</p>
              <p>Thank you for contacting us. We'll get back to you shortly.</p>
            </div>
          <?php endif; ?>

          <h2 class="text-2xl font-bold mb-8">Send Us a Message</h2>
          <form method="POST" action="" class="space-y-6">
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-semibold mb-2">Name</label>
                <input type="text" name="name" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none">
              </div>
              <div>
                <label class="block text-sm font-semibold mb-2">Email</label>
                <input type="email" name="email" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none">
              </div>
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Subject</label>
              <input type="text" name="subject" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none">
            </div>
            <div>
              <label class="block text-sm font-semibold mb-2">Message</label>
              <textarea name="message" rows="5" required class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary outline-none resize-none"></textarea>
            </div>
            <button type="submit" class="w-full bg-primary text-white py-3 rounded-lg font-bold hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

        <!-- Info Panels -->
        <div class="space-y-6">
          <div class="bg-white p-6 rounded-lg shadow-md flex gap-4">
            <i data-lucide="mail" class="w-6 h-6 text-primary shrink-0"></i>
            <div>
              <h4 class="font-bold mb-1">Charter Enquiries</h4>
              <a href="mailto:charters@transafricanair.com" class="text-primary hover:underline">charters@transafricanair.com</a>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md flex gap-4">
            <i data-lucide="mail" class="w-6 h-6 text-primary shrink-0"></i>
            <div>
              <h4 class="font-bold mb-1">Sales & Commercial</h4>
              <a href="mailto:sales@transafricanair.com" class="text-primary hover:underline">sales@transafricanair.com</a>
            </div>
          </div>
          <div class="bg-white p-6 rounded-lg shadow-md flex gap-4">
            <i data-lucide="map-pin" class="w-6 h-6 text-primary shrink-0"></i>
            <div>
              <h4 class="font-bold mb-1">Our HQ Location</h4>
              <p class="text-slate-600 text-sm">
                Airport Trade Center Building, 2nd Floor, Wing A<br>
                JKIA, Nairobi, Kenya
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Map -->
      <div class="mt-16 bg-white rounded-lg shadow-lg overflow-hidden h-96">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31909.79416845477!2d36.899178939550765!3d-1.3418051000000033!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f0d7dd4558189%3A0xa9a304dde009742f!2sAirport%20Trade%20Centre!5e0!3m2!1sen!2ske!4v1640554878209!5m2!1sen!2ske" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
  </section>
</main>

<?php include 'includes/footer.php'; ?>
