document.addEventListener("DOMContentLoaded",function(){
    const footer = document.querySelector("footer");
// console.log(footer);
if (footer) {
    footer.innerHTML = `
    <div style="display: flex; margin-bottom: 40px; margin-top:30px; align-items: center; justify-content: space-evenly; flex-wrap: wrap; overflow-x: hidden;">
            <style>
                footer a{
                    text-decoration: none;
                    color: rgba(255, 255, 255, 0.692);
                    transition: 600ms;
                }
                footer a:hover{
                    color: rgba(255, 255, 255, 0.279);
                }
                .foot-title {
                    font-weight: 700;
                    text-align: center;
                    color: rgba(255, 255, 255, 0.806);
                }
                footer {
                    text-align: center;
                }
                .svg:hover{
                    background-color: white;
                }
                     #backhomebtn{
                    background-color: #10b981; 
                    transition: 500ms;
                }
                #backhomebtn:hover{
                    background-color: #10b98171;
                }
            </style>
            <div style="max-width: 200px; margin: 0 auto; text-align: center;">
                <h1 style="font-size: larger;">Veggie Smart</h1>
                <p style="font-size: smaller; color: gray;">Made with 🩷 By Sourav</p>
                <div style="margin: 0 auto; display: flex; margin: 10px 0px 10px 0px;">
                    <a href="">
                        <svg class="svg" style="margin-right: 20px; color: white; font-size: x-large; padding: 5px; background:rgba(128, 128, 128, 0.342);border-radius: 8px;"   xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </a>
                    <a href="">
                        <svg style="margin-right: 20px; color: white; font-size: x-large; padding: 5px; background:rgba(128, 128, 128, 0.342);border-radius: 8px;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Layer_1" width="24px" height="24px" viewBox="0 0 24 24" style="enable-background:new 0 0 24 24;" xml:space="preserve"><path d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"/></svg>
                    </a>
                    <a href="https://www.instagram.com/sourav-chhimpa/" target="_blank">
                        <svg style="margin-right: 20px; color: white; font-size: x-large; padding: 5px; background:rgba(128, 128, 128, 0.342);border-radius: 8px;" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                </div>
            </div>
            <div style="display: flex; min-width: 340px; max-width: 60%; margin: 0 auto; text-align: center; justify-content: space-evenly; border-radius: 8px;">
               <div>
                <p class="foot-title">Trending</p>
                <p style="text-align: center; text-align: left;"><a href="./../FinanceCal/InterestCal.html">Simple Interest</a></p>
                <p style="text-align: center; text-align: left;"><a href="./../FinanceCal/CompoundInterest.html">Compound Interest</a></p>
                <p style="text-align: center; text-align: left;"><a href="./../HomeImprovementCals/FlooringCalculator.html">Advanced Flooring</a></p>
                <p style="text-align: center; text-align: left;"><a href="./../AutomotiveCalculators/MaintenanceCostCalculator.html">Maintenance Cost</a></p>
               </div>
               <div>
                <p class="foot-title">Library Used</p>
                <p style="text-align: center; text-align: left;"><a href="https://www.chartjs.org/" target="_blank">Chart.js</a></p>
                <p style="text-align: center; text-align: left;"><a href="https://www.babylonjs.com/" target="_blank">Babylon.js</a></p>
                <p style="text-align: center; text-align: left;"><a href="http://pdfmake.org/#/" target="_blank">pdfmake</a></p>
                <p style="text-align: center; text-align: left;"><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a></p>
               </div>
               <div>
                <p class="foot-title">Pages</p>
                <p style="text-align: center; text-align: center;"><a href="./../Pages/Aboutus.html">About Us</a></p>
                <p style="text-align: center; text-align: center;"><a href="./../Pages/contactus.html">Contact Us</a></p>
                <p style="text-align: center; text-align: center;"><a href="./../Pages/Faq.html">FAQ</a></p>
                <p style="text-align: center; text-align: center;"><a href="./../Pages/Terms-and-conditions.html">T&C</a></p>
               </div>
            </div>
        </div>
        <p style="font-size: smaller; color: gray; margin-top: 10px; margin-bottom: 10px;">&copy; 2024 Veggie Smart. All Rights Reserved</p> 
        <a href="/">
            <p id="backhomebtn" style="max-width: 90%;padding: 4px 0 4px 0; text-align: center; margin: 10px auto; font-size: larger; color: white ; border-radius: 8px;">Back to Home</p>
        </a>
        `;
} else {
    console.error("Footer element not found.");
}

//  share system injected
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

