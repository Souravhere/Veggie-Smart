document.addEventListener('DOMContentLoaded', () => {
    // Load Font Awesome dynamically if not already included
    const loadFontAwesome = () => {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
            document.head.appendChild(link);
        }
    };

    loadFontAwesome();

    const imageUrl = 'https://veggie-smart.vercel.app/SourceImages/open-graph-img.png'; 
    const pageDescription = 'A tool to calculate vegetable prices, recipe costs, and more. Updated regularly with new features.';
    const pageTitle = encodeURIComponent(document.title + ' | Where Smart Calculations Begin');
    const pageUrl = encodeURIComponent(window.location.href);
    const encodedImageUrl = encodeURIComponent(imageUrl);
    const encodedDescription = encodeURIComponent(pageDescription);

    // Function to inject meta tags for image and description
    const injectMetaTags = () => {
        let metaImage = document.querySelector('meta[property="og:image"]');
        let metaDescription = document.querySelector('meta[name="description"]');
        let metaOgDescription = document.querySelector('meta[property="og:description"]');

        if (!metaImage) {
            metaImage = document.createElement('meta');
            metaImage.setAttribute('property', 'og:image');
            document.head.appendChild(metaImage);
        }
        metaImage.setAttribute('content', imageUrl);

        if (!metaDescription) {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            document.head.appendChild(metaDescription);
        }
        metaDescription.setAttribute('content', pageDescription);

        if (!metaOgDescription) {
            metaOgDescription = document.createElement('meta');
            metaOgDescription.setAttribute('property', 'og:description');
            document.head.appendChild(metaOgDescription);
        }
        metaOgDescription.setAttribute('content', pageDescription);
    };

    injectMetaTags();

    // Create and style the share button container
    const shareButtonContainer = document.createElement('div');
    shareButtonContainer.id = 'share-button-container';
    shareButtonContainer.style.position = 'fixed';
    shareButtonContainer.style.bottom = '20px';
    shareButtonContainer.style.right = '20px';
    shareButtonContainer.style.zIndex = '1000';

    // Create and style the share button
    const shareButton = document.createElement('button');
    shareButton.id = 'share-button';
    shareButton.style.backgroundColor = '#007bff';
    shareButton.style.color = '#fff';
    shareButton.style.border = 'none';
    shareButton.style.borderRadius = '50%';
    shareButton.style.width = '50px';
    shareButton.style.height = '50px';
    shareButton.style.display = 'flex';
    shareButton.style.alignItems = 'center';
    shareButton.style.justifyContent = 'center';
    shareButton.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    shareButton.style.cursor = 'pointer';
    shareButton.innerHTML = '<i class="fas fa-share-alt"></i>';

    // Create and style the share menu
    const shareMenu = document.createElement('div');
    shareMenu.id = 'share-menu';
    shareMenu.style.display = 'none';
    shareMenu.style.position = 'absolute';
    shareMenu.style.bottom = '60px';
    shareMenu.style.right = '0';
    shareMenu.style.backgroundColor = '#fff';
    shareMenu.style.borderRadius = '8px';
    shareMenu.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    shareMenu.style.padding = '10px';
    shareMenu.style.zIndex = '1001';
    shareMenu.style.maxWidth = '250px';
    shareMenu.style.textAlign = 'center';

    // Function to create social media icons
    const createSocialMediaIcons = () => {
        const socialMedia = [
            { name: 'Facebook', url: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}&quote=${pageTitle}&picture=${encodedImageUrl}`, icon: 'fab fa-facebook-f' },
            { name: 'Twitter', url: `https://twitter.com/intent/tweet?url=${pageUrl}&text=${pageTitle}&via=yourhandle&hashtags=example&image=${encodedImageUrl}`, icon: 'fab fa-twitter' },
            { name: 'LinkedIn', url: `https://www.linkedin.com/shareArticle?mini=true&url=${pageUrl}&title=${pageTitle}&summary=${encodedDescription}&source=LinkedIn&image=${encodedImageUrl}`, icon: 'fab fa-linkedin-in' },
            { name: 'WhatsApp', url: `https://api.whatsapp.com/send?text=${pageTitle}%20${pageUrl}`, icon: 'fab fa-whatsapp' },
            { name: 'Pinterest', url: `https://pinterest.com/pin/create/button/?url=${pageUrl}&description=${encodedDescription}&media=${encodedImageUrl}`, icon: 'fab fa-pinterest' },
            { name: 'Reddit', url: `https://www.reddit.com/submit?url=${pageUrl}&title=${pageTitle}`, icon: 'fab fa-reddit' },
            { name: 'Telegram', url: `https://t.me/share/url?url=${pageUrl}&text=${pageTitle}`, icon: 'fab fa-telegram-plane' },
            { name: 'Tumblr', url: `https://www.tumblr.com/share/link?url=${pageUrl}&name=${pageTitle}`, icon: 'fab fa-tumblr' },
            { name: 'Instagram', url: 'https://www.instagram.com/create/story/', icon: 'fab fa-instagram', instructions: 'Please open the Instagram app and manually add your post. Instagram does not support direct URL sharing.' }
        ];

        return socialMedia.map(media => {
            const a = document.createElement('a');
            a.href = media.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.style.display = 'inline-block';
            a.style.width = '40px';
            a.style.height = '40px';
            a.style.backgroundColor = '#f3f4f6';
            a.style.borderRadius = '50%';
            a.style.color = '#333';
            a.style.textAlign = 'center';
            a.style.lineHeight = '40px';
            a.style.fontSize = '18px';
            a.style.marginBottom = '10px';
            a.style.transition = 'background-color 0.3s, color 0.3s';
            a.innerHTML = `<i class="${media.icon}"></i>`;

            a.addEventListener('mouseover', () => {
                a.style.backgroundColor = '#e5e7eb';
                a.style.color = '#000';
            });

            a.addEventListener('mouseout', () => {
                a.style.backgroundColor = '#f3f4f6';
                a.style.color = '#333';
            });

            if (media.instructions) {
                a.title = media.instructions;
            }

            return a;
        });
    };

    // Toggle share menu visibility
    const toggleShareMenu = () => {
        shareMenu.style.display = (shareMenu.style.display === 'none' || !shareMenu.style.display) ? 'block' : 'none';
    };

    // Append elements to the container
    shareButtonContainer.appendChild(shareButton);
    shareButtonContainer.appendChild(shareMenu);
    document.body.appendChild(shareButtonContainer);

    // Add event listener to share button
    shareButton.addEventListener('click', () => {
        if (shareMenu.childElementCount === 0) {
            const icons = createSocialMediaIcons();
            icons.forEach(icon => shareMenu.appendChild(icon));
        }
        toggleShareMenu();
    });

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!shareButtonContainer.contains(event.target)) {
            shareMenu.style.display = 'none';
        }
    });
});
