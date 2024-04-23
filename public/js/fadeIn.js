const fadeInElements = document.querySelectorAll('.fade-in');

        function checkFadeIn() {
            fadeInElements.forEach((element) => {
                if (isElementInViewport(element)) {
                    element.classList.add('visible');
                }
            });
        }

        function isElementInViewport(el) {
            const rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', checkFadeIn);
        window.addEventListener('load', checkFadeIn);
        window.addEventListener('resize', checkFadeIn);

        // Initial check in case elements are already in view on page load
        checkFadeIn();