### **Chapter 25: Day 25**
**Objectives:** Create an interactive photo gallery using HTML, CSS, and JavaScript, implement lightbox functionality, and learn how to organize and present visual content effectively on the web.

---

### **Lesson: HTML Mini Project 2**
**Explanation:**
This second mini-project focuses on creating an interactive photo gallery that showcases your work or interests. A photo gallery is a common web component that requires careful consideration of layout, user interaction, and performance optimization.

**Project Requirements:**
1. Responsive grid layout for images
2. Lightbox functionality for viewing larger images
3. Image optimization for web
4. Accessibility features (alt text, keyboard navigation)
5. Filtering or categorization system
6. Clean, intuitive user interface

**Code Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Photo Gallery</title>
    <style>
        /* Base styles */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Arial', sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f8f9fa;
        }
        
        .container {
            width: 90%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        
        header {
            text-align: center;
            margin-bottom: 30px;
        }
        
        h1 {
            font-size: 2.5rem;
            margin-bottom: 10px;
            color: #333;
        }
        
        /* Filter controls */
        .filter-controls {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .filter-btn {
            padding: 8px 16px;
            background-color: white;
            border: 1px solid #ddd;
            border-radius: 4px;
            cursor: pointer;
            transition: all 0.3s;
        }
        
        .filter-btn:hover,
        .filter-btn.active {
            background-color: #4361ee;
            color: white;
            border-color: #4361ee;
        }
        
        /* Gallery grid */
        .gallery {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
            gap: 15px;
            margin-bottom: 30px;
        }
        
        .gallery-item {
            position: relative;
            overflow: hidden;
            border-radius: 8px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            cursor: pointer;
        }
        
        .gallery-item img {
            width: 100%;
            height: 200px;
            object-fit: cover;
            transition: transform 0.3s;
        }
        
        .gallery-item:hover img {
            transform: scale(1.05);
        }
        
        .gallery-item .caption {
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: rgba(0, 0, 0, 0.7);
            color: white;
            padding: 10px;
            transform: translateY(100%);
            transition: transform 0.3s;
        }
        
        .gallery-item:hover .caption {
            transform: translateY(0);
        }
        
        /* Lightbox */
        .lightbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.9);
            z-index: 1000;
            justify-content: center;
            align-items: center;
        }
        
        .lightbox-content {
            position: relative;
            max-width: 90%;
            max-height: 90%;
        }
        
        .lightbox-img {
            max-width: 100%;
            max-height: 80vh;
            border-radius: 8px;
        }
        
        .lightbox-caption {
            color: white;
            text-align: center;
            margin-top: 15px;
        }
        
        .close-btn {
            position: absolute;
            top: 20px;
            right: 20px;
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: none;
            border: none;
        }
        
        .nav-btn {
            position: absolute;
            top: 50%;
            transform: translateY(-50%);
            color: white;
            font-size: 30px;
            cursor: pointer;
            background: none;
            border: none;
        }
        
        .prev-btn {
            left: 20px;
        }
        
        .next-btn {
            right: 20px;
        }
        
        /* Responsive design */
        @media (max-width: 768px) {
            .gallery {
                grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
            }
            
            h1 {
                font-size: 2rem;
            }
        }
        
        @media (max-width: 480px) {
            .gallery {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <header>
            <h1>Photo Gallery</h1>
            <p>A collection of my favorite photographs</p>
        </header>
        
        <div class="filter-controls">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="nature">Nature</button>
            <button class="filter-btn" data-filter="urban">Urban</button>
            <button class="filter-btn" data-filter="portrait">Portrait</button>
        </div>
        
        <div class="gallery" id="gallery">
            <!-- Gallery items will be added here -->
        </div>
    </div>
    
    <!-- Lightbox -->
    <div class="lightbox" id="lightbox">
        <button class="close-btn" id="close-btn">&times;</button>
        <button class="nav-btn prev-btn" id="prev-btn">&lt;</button>
        <button class="nav-btn next-btn" id="next-btn">&gt;</button>
        <div class="lightbox-content">
            <img src="" alt="" class="lightbox-img" id="lightbox-img">
            <p class="lightbox-caption" id="lightbox-caption"></p>
        </div>
    </div>

    <script>
        // Gallery data
        const galleryData = [
            {
                src: "https://images.unsplash.com/photo-1501854140801-50d01698950b",
                category: "nature",
                caption: "Mountain Landscape"
            },
            {
                src: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
                category: "urban",
                caption: "City Skyline"
            },
            {
                src: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
                category: "portrait",
                caption: "Portrait Photography"
            },
            {
                src: "https://images.unsplash.com/photo-1472214103451-9374bd1c798e",
                category: "nature",
                caption: "Beautiful Waterfall"
            },
            {
                src: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df",
                category: "urban",
                caption: "City Architecture"
            },
            {
                src: "https://images.unsplash.com/photo-1542206395-9feb3edaa68d",
                category: "portrait",
                caption: "Professional Portrait"
            },
            {
                src: "https://images.unsplash.com/photo-1502082553048-f009c37129b9",
                category: "nature",
                caption: "Forest Path"
            },
            {
                src: "https://images.unsplash.com/photo-1496568816309-51d7c20e3b21",
                category: "urban",
                caption: "Urban Nightscape"
            }
        ];

        // DOM elements
        const galleryContainer = document.getElementById('gallery');
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.getElementById('close-btn');
        const prevBtn = document.getElementById('prev-btn');
        const nextBtn = document.getElementById('next-btn');
        const filterBtns = document.querySelectorAll('.filter-btn');

        // Current image index for navigation
        let currentImageIndex = 0;

        // Initialize gallery
        function initGallery() {
            // Clear gallery
            galleryContainer.innerHTML = '';
            
            // Get active filter
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            
            // Filter images
            const filteredImages = activeFilter === 'all' 
                ? galleryData 
                : galleryData.filter(img => img.category === activeFilter);
            
            // Create gallery items
            filteredImages.forEach((image, index) => {
                const galleryItem = document.createElement('div');
                galleryItem.className = 'gallery-item';
                galleryItem.dataset.index = index;
                galleryItem.dataset.category = image.category;
                
                galleryItem.innerHTML = `
                    <img src="${image.src}?w=400&h=300&fit=crop" alt="${image.caption}">
                    <div class="caption">${image.caption}</div>
                `;
                
                galleryItem.addEventListener('click', () => {
                    openLightbox(index, filteredImages);
                });
                
                galleryContainer.appendChild(galleryItem);
            });
        }

        // Open lightbox
        function openLightbox(index, images) {
            currentImageIndex = index;
            const image = images[index];
            
            lightboxImg.src = `${image.src}?w=1200&h=800&fit=crop`;
            lightboxImg.alt = image.caption;
            lightboxCaption.textContent = image.caption;
            
            lightbox.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // Close lightbox
        function closeLightbox() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }

        // Navigate to next image
        function nextImage() {
            const filteredImages = getFilteredImages();
            currentImageIndex = (currentImageIndex + 1) % filteredImages.length;
            openLightbox(currentImageIndex, filteredImages);
        }

        // Navigate to previous image
        function prevImage() {
            const filteredImages = getFilteredImages();
            currentImageIndex = (currentImageIndex - 1 + filteredImages.length) % filteredImages.length;
            openLightbox(currentImageIndex, filteredImages);
        }

        // Get currently filtered images
        function getFilteredImages() {
            const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
            return activeFilter === 'all' 
                ? galleryData 
                : galleryData.filter(img => img.category === activeFilter);
        }

        // Event listeners
        closeBtn.addEventListener('click', closeLightbox);
        nextBtn.addEventListener('click', nextImage);
        prevBtn.addEventListener('click', prevImage);

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'flex') {
                if (e.key === 'Escape') closeLightbox();
                if (e.key === 'ArrowRight') nextImage();
                if (e.key === 'ArrowLeft') prevImage();
            }
        });

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                initGallery();
            });
        });

        // Initialize gallery on load
        window.addEventListener('DOMContentLoaded', initGallery);
    </script>
</body>
</html>
```

**Practice Task:**
Create the basic structure of your photo gallery with:
1. A responsive grid layout for images
2. Filter controls for different categories
3. Basic lightbox functionality
4. Image captions that appear on hover
5. Responsive design for different screen sizes

---

### **Lesson: Create a Photo Gallery**
**Explanation:**
Now let's enhance the photo gallery with advanced features and optimizations. A good photo gallery should not only look good but also perform well and provide an excellent user experience.

**Key Enhancements:**
1. Lazy loading for images to improve performance
2. Image optimization for faster loading
3. Keyboard navigation for accessibility
4. Touch gestures for mobile devices
5. Loading states and error handling

**Code Example (Enhanced Gallery):**
```html
<!-- Add these enhancements to the previous code -->

<style>
    /* Add loading animation */
    .gallery-item {
        position: relative;
        overflow: hidden;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        background-color: #f0f0f0;
        min-height: 200px;
    }
    
    .gallery-item img {
        width: 100%;
        height: 200px;
        object-fit: cover;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
    }
    
    .gallery-item img.loaded {
        opacity: 1;
    }
    
    .loading {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 40px;
        height: 40px;
        border: 4px solid #f3f3f3;
        border-top: 4px solid #4361ee;
        border-radius: 50%;
        animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
        0% { transform: translate(-50%, -50%) rotate(0deg); }
        100% { transform: translate(-50%, -50%) rotate(360deg); }
    }
    
    /* Error state */
    .gallery-item .error {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: #666;
        text-align: center;
    }
    
    /* Touch improvements for mobile */
    .gallery-item {
        -webkit-tap-highlight-color: transparent;
    }
    
    /* Improve lightbox for touch devices */
    @media (max-width: 768px) {
        .nav-btn, .close-btn {
            font-size: 24px;
            padding: 15px;
        }
        
        .lightbox-img {
            max-height: 70vh;
        }
    }
</style>

<script>
    // Enhanced image loading with lazy loading and error handling
    function initGallery() {
        // Clear gallery
        galleryContainer.innerHTML = '';
        
        // Get active filter
        const activeFilter = document.querySelector('.filter-btn.active').dataset.filter;
        
        // Filter images
        const filteredImages = activeFilter === 'all' 
            ? galleryData 
            : galleryData.filter(img => img.category === activeFilter);
        
        // Create gallery items
        filteredImages.forEach((image, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item';
            galleryItem.dataset.index = index;
            galleryItem.dataset.category = image.category;
            
            // Add loading spinner
            const loadingSpinner = document.createElement('div');
            loadingSpinner.className = 'loading';
            galleryItem.appendChild(loadingSpinner);
            
            // Create image element
            const imgElement = document.createElement('img');
            imgElement.alt = image.caption;
            imgElement.loading = 'lazy'; // Native lazy loading
            
            // Load image with error handling
            const loadImage = new Image();
            loadImage.src = `${image.src}?w=400&h=300&fit=crop`;
            
            loadImage.onload = function() {
                imgElement.src = this.src;
                imgElement.classList.add('loaded');
                loadingSpinner.remove();
            };
            
            loadImage.onerror = function() {
                loadingSpinner.remove();
                const errorMsg = document.createElement('div');
                errorMsg.className = 'error';
                errorMsg.textContent = 'Failed to load image';
                galleryItem.appendChild(errorMsg);
            };
            
            galleryItem.appendChild(imgElement);
            
            // Add caption
            const caption = document.createElement('div');
            caption.className = 'caption';
            caption.textContent = image.caption;
            galleryItem.appendChild(caption);
            
            // Add click event
            galleryItem.addEventListener('click', () => {
                openLightbox(index, filteredImages);
            });
            
            // Add keyboard support
            galleryItem.setAttribute('tabindex', '0');
            galleryItem.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index, filteredImages);
                }
            });
            
            galleryContainer.appendChild(galleryItem);
        });
    }

    // Add touch gestures for mobile lightbox navigation
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    }, false);

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    }, false);

    function handleSwipe() {
        const swipeThreshold = 50;
        
        if (touchEndX < touchStartX - swipeThreshold) {
            nextImage(); // Swipe left
        }
        
        if (touchEndX > touchStartX + swipeThreshold) {
            prevImage(); // Swipe right
        }
    }
</script>
```

**Practice Task:**
Enhance your photo gallery with:
1. Lazy loading for better performance
2. Loading states and error handling for images
3. Touch gestures for mobile navigation
4. Improved accessibility with keyboard navigation
5. Optimized images for different screen sizes

---

### **Lesson: Upload & Review**
**Explanation:**
Learning to review and optimize your photo gallery is essential for creating a professional web experience. This involves testing performance, accessibility, and user experience across different devices and scenarios.

**Review Checklist:**
1. **Performance:** Image optimization, lazy loading, fast loading times
2. **Accessibility:** Keyboard navigation, screen reader compatibility, proper alt text
3. **Responsiveness:** Works on all screen sizes and devices
4. **User Experience:** Intuitive navigation, smooth animations, clear feedback
5. **Browser Compatibility:** Works across different browsers

**Code Example (Performance Optimization):**
```html
<!-- Add these optimizations to your gallery -->

<script>
    // Preload critical images
    function preloadCriticalImages() {
        const criticalImages = galleryData.slice(0, 3); // Preload first 3 images
        
        criticalImages.forEach(image => {
            const link = document.createElement('link');
            link.rel = 'preload';
            link.as = 'image';
            link.href = `${image.src}?w=400&h=300&fit=crop`;
            document.head.appendChild(link);
        });
    }

    // Intersection Observer for more efficient lazy loading
    function initLazyLoading() {
        const lazyImages = document.querySelectorAll('.gallery-item img');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => {
                img.dataset.src = img.src;
                img.src = '';
                imageObserver.observe(img);
            });
        } else {
            // Fallback for browsers without Intersection Observer
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
            });
        }
    }

    // Initialize everything when DOM is loaded
    window.addEventListener('DOMContentLoaded', () => {
        preloadCriticalImages();
        initGallery();
        initLazyLoading();
    });

    // Add performance monitoring
    window.addEventListener('load', () => {
        // Log performance metrics
        if ('performance' in window) {
            const perfData = window.performance.timing;
            const loadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log(`Page loaded in ${loadTime}ms`);
        }
    });
</script>
```

**Practice Task:**
Review and optimize your photo gallery:
1. Test performance using browser developer tools
2. Check accessibility with screen readers and keyboard navigation
3. Test on different devices and browsers
4. Optimize images for web delivery
5. Implement any missing features from the review checklist

---

### **Homework:**
Create a complete, polished photo gallery website and prepare it for deployment:

1. **Final Implementation:**
   - Add your own photographs or use a consistent theme
   - Implement all gallery features (filtering, lightbox, etc.)
   - Ensure proper image optimization and lazy loading
   - Add a contact section or about page

2. **Enhancements:**
   - Add image download option in lightbox
   - Implement social sharing buttons
   - Add EXIF data display for photography enthusiasts
   - Create multiple gallery pages with different themes

3. **Testing:**
   - Test on multiple devices and browsers
   - Check performance with various connection speeds
   - Verify accessibility with screen readers
   - Test touch gestures on mobile devices

4. **Documentation:**
   - Create a README file explaining your project
   - Document your optimization techniques
   - Include instructions for how to add new images

5. **Deployment Preparation:**
   - Optimize all images for web
   - Minify CSS and JavaScript
   - Set up for deployment on a platform like GitHub Pages or Netlify

Submit your complete photo gallery website as a zip file containing all HTML, CSS, JavaScript, and image files. Include a link to your live website if you've deployed it.