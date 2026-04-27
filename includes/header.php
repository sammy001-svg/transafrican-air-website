<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $pageTitle ?? 'Transafrican Air - Premium Aircraft Charter Services'; ?></title>
    <meta name="description" content="<?php echo $pageDescription ?? 'Premium Aircraft Charter and Cargo Services across Africa.'; ?>">
    
    <!-- Favicons -->
    <link rel="icon" href="/public/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="/public/apple-icon.png">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Geist:wght@100..900&family=Geist+Mono:wght@100..900&display=swap" rel="stylesheet">
    
    <!-- Frameworks -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://unpkg.com/lucide@0.473.0/dist/umd/lucide.min.js"></script>
    
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        primary: '#c21807',
                        background: '#fafafa',
                        foreground: '#1a1a1a',
                        accent: '#ff4500'
                    },
                    fontFamily: {
                        sans: ['Geist', 'sans-serif'],
                        mono: ['Geist Mono', 'monospace'],
                    }
                }
            }
        }
    </script>
    
    <style>
        /* Ported from globals.css */
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
        }
        .icon-float { animation: float 3s ease-in-out infinite; }
        
        .stagger-on-hover:hover .char-stagger {
            animation: charStagger 0.6s ease-out forwards;
        }
        @keyframes charStagger {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .drop-shadow-md { filter: drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06)); }
        
        body {
            font-family: 'Geist', sans-serif;
            background-color: #fafafa;
            color: #1a1a1a;
        }
    </style>
</head>
<body class="font-sans antialiased">
