document.addEventListener('DOMContentLoaded', () => {
    // Load Font Awesome and html2canvas dynamically if not already included
    const loadResources = () => {
        const resources = [
            {
                type: 'link',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css',
                rel: 'stylesheet'
            },
            {
                type: 'script',
                src: 'https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js'
            }
        ];

        resources.forEach(resource => {
            if (resource.type === 'link' && !document.querySelector(`link[href="${resource.href}"]`)) {
                const link = document.createElement('link');
                link.rel = resource.rel;
                link.href = resource.href;
                document.head.appendChild(link);
            } else if (resource.type === 'script' && !document.querySelector(`script[src="${resource.src}"]`)) {
                const script = document.createElement('script');
                script.src = resource.src;
                document.head.appendChild(script);
            }
        });
    };

    loadResources();

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
            { name: 'Facebook', url: 'https://www.facebook.com/sharer/sharer.php?u=', icon: 'fab fa-facebook-f' },
            { name: 'Twitter', url: 'https://twitter.com/intent/tweet?url=', icon: 'fab fa-twitter' },
            { name: 'LinkedIn', url: 'https://www.linkedin.com/shareArticle?mini=true&url=', icon: 'fab fa-linkedin-in' },
            { name: 'WhatsApp', url: 'https://api.whatsapp.com/send?text=', icon: 'fab fa-whatsapp' },
            { name: 'Pinterest', url: 'https://pinterest.com/pin/create/button/?url=', icon: 'fab fa-pinterest' },
            { name: 'Reddit', url: 'https://www.reddit.com/submit?url=', icon: 'fab fa-reddit' },
            { name: 'Telegram', url: 'https://t.me/share/url?url=', icon: 'fab fa-telegram-plane' },
            { name: 'Tumblr', url: 'https://www.tumblr.com/share/link?url=', icon: 'fab fa-tumblr' },
            { name: 'Instagram', url: '', icon: 'fab fa-instagram' }
        ];

        return socialMedia.map(media => {
            const a = document.createElement('a');
            a.href = `${media.url}${encodeURIComponent(window.location.href)}`;
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

            a.addEventListener('click', async (event) => {
                event.preventDefault();

                try {
                    const canvas = await html2canvas(document.body, {
                        height: window.innerHeight / 2
                    });

                    if (canvas.toDataURL) {
                        const imgData = canvas.toDataURL('image/png');
                        const topParagraph = document.querySelector('p').innerText;
                        const shareData = {
                            title: document.title,
                            text: topParagraph,
                            url: window.location.href,
                            files: [
                                new File([imgData], 'screenshot.png', { type: 'image/png' })
                            ]
                        };

                        if (navigator.share) {
                            navigator.share(shareData)
                                .then(() => console.log('Shared successfully'))
                                .catch(error => console.error('Error sharing', error));
                        } else {
                            if (media.name === 'Instagram') {
                                alert('Instagram sharing is not supported. Please share manually.');
                            } else {
                                window.open(a.href, '_blank');
                            }
                        }
                    } else {
                        throw new Error('canvas.toDataURL is not a function');
                    }
                } catch (error) {
                    console.error('Error generating screenshot', error);
                    if (media.name === 'Instagram') {
                        alert('Instagram sharing is not supported. Please share manually.');
                    } else {
                        window.open(a.href, '_blank');
                    }
                }
            });

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
