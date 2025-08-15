 // Mobile menu toggle
        document.getElementById('mobile-menu-btn').addEventListener('click', function() {
            const mobileMenu = document.getElementById('mobile-menu');
            mobileMenu.classList.toggle('hidden');
        });

        // Smooth scrolling for navigation links
        function scrollToSection(sectionId) {
            document.getElementById(sectionId).scrollIntoView({
                behavior: 'smooth'
            });
        }

        // Add click event listeners to navigation links
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                scrollToSection(targetId);
                
                // Close mobile menu if open
                const mobileMenu = document.getElementById('mobile-menu');
                mobileMenu.classList.add('hidden');
            });
        });

        // Image modal functionality
        function openModal(element) {
            const modal = document.getElementById('imageModal');
            const modalImg = document.getElementById('modalImage');
            const img = element.querySelector('img');
            
            modal.style.display = 'block';
            modalImg.src = img.src;
            modalImg.alt = img.alt;
            
            // Prevent body scroll when modal is open
            document.body.style.overflow = 'hidden';
        }

        function closeModal() {
            const modal = document.getElementById('imageModal');
            modal.style.display = 'none';
            
            // Restore body scroll
            document.body.style.overflow = 'auto';
        }

        // Close modal when clicking outside the image
        document.getElementById('imageModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });

        // Close modal with escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeModal();
            }
        });

        // Add scroll effect to navigation
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 100) {
                nav.classList.add('bg-opacity-95');
            } else {
                nav.classList.remove('bg-opacity-95');
            }
        });

        // Add intersection observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe photo items for animations
        document.querySelectorAll('.photo-item').forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(50px)';
            item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(item);
        });

        // Add parallax effect to floating elements
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelectorAll('.floating-element');
            
            parallax.forEach((element, index) => {
                const speed = 0.5 + (index * 0.1);
                element.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
            });
        });

        // Add loading animation
        window.addEventListener('load', function() {
            document.body.style.opacity = '1';
            document.body.style.transition = 'opacity 0.5s ease';
        });

        // Initialize
        document.body.style.opacity = '0';