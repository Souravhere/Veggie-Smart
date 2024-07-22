document.addEventListener('DOMContentLoaded', () => {
    // Function to create and inject the breadcrumb navigation
    const createBreadcrumbs = () => {
        // Create a style element and inject CSS for breadcrumbs
        const style = document.createElement('style');
        style.textContent = `
            /* Styles for Breadcrumb Popup */
            #breadcrumb-popup {
                position: fixed;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                background-color: rgba(0, 0, 0, 0.8);
                color: #fff;
                display: none;
                z-index: 1000;
                padding: 20px;
                overflow-y: auto;
            }
            
            #breadcrumb-popup nav {
                background-color: #000;
                padding: 15px;
                border-radius: 8px;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
            }
            
            #breadcrumb-popup ol {
                list-style-type: none;
                margin: 0;
                padding: 0;
                display: flex;
                flex-wrap: wrap;
                gap: 10px;
            }
            
            #breadcrumb-popup li {
                font-size: 16px;
            }
            
            #breadcrumb-popup a {
                color: #1e90ff;
                text-decoration: none;
                display: block;
                padding: 5px;
                border-radius: 4px;
            }
            
            #breadcrumb-popup a:hover {
                background-color: #333;
            }
            
            /* Floating Button Styles */
            #breadcrumb-toggle {
                position: fixed;
                bottom: 20px;
                right: 20px;
                background-color: #000;
                color: #fff;
                border: none;
                border-radius: 50%;
                width: 55px;
                height: 55px;
                display: flex;
                align-items: center;
                justify-content: center;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
                cursor: pointer;
                z-index: 1001;
                font-size: 24px;
            }
            
            /* Mobile Styles */
            @media (max-width: 767px) {
                #breadcrumb-popup {
                    top: 0;
                    bottom: 0;
                    padding: 10px;
                }
                
                #breadcrumb-popup nav {
                    padding: 10px;
                }
                
                #breadcrumb-popup a {
                    font-size: 14px;
                }
                
                #breadcrumb-toggle {
                    bottom: 80px;
                }
            }
            
            /* Desktop Styles */
            @media (min-width: 768px) {
                #breadcrumb-popup {
                    top: 60px; /* Adjust if needed */
                    bottom: 60px; /* Adjust if needed */
                }
                
                #breadcrumb-toggle {
                    bottom: 80px;
                    right: 20px;
                }
            }
        `;
        document.head.appendChild(style);

        // Get the current URL path and split it into segments
        const path = window.location.pathname.split('/').filter(segment => segment);

        // Create breadcrumb popup container
        const breadcrumbPopup = document.createElement('div');
        breadcrumbPopup.id = 'breadcrumb-popup';
        
        // Create the breadcrumb navigation
        const breadcrumbNav = document.createElement('nav');
        const breadcrumbList = document.createElement('ol');
        
        // Create breadcrumb items
        path.forEach((segment, index) => {
            const listItem = document.createElement('li');
            
            const link = document.createElement('a');
            link.href = '/' + path.slice(0, index + 1).join('/');
            link.textContent = decodeURIComponent(segment.replace(/-/g, ' '));
            
            link.addEventListener('mouseover', () => link.style.backgroundColor = '#333');
            link.addEventListener('mouseout', () => link.style.backgroundColor = 'transparent');

            if (index < path.length - 1) {
                link.textContent += ' ›';
            }

            listItem.appendChild(link);
            breadcrumbList.appendChild(listItem);
        });

        breadcrumbNav.appendChild(breadcrumbList);
        breadcrumbPopup.appendChild(breadcrumbNav);
        document.body.appendChild(breadcrumbPopup);

        // Create floating button
        const button = document.createElement('button');
        button.id = 'breadcrumb-toggle';
        button.innerHTML = '<i class="fas fa-bars"></i>'; // Default icon
        document.body.appendChild(button);

        // Toggle breadcrumb popup visibility and icon
        button.addEventListener('click', () => {
            if (breadcrumbPopup.style.display === 'none' || breadcrumbPopup.style.display === '') {
                breadcrumbPopup.style.display = 'block';
                button.innerHTML = '<i class="fas fa-times"></i>'; // Change to close icon
            } else {
                breadcrumbPopup.style.display = 'none';
                button.innerHTML = '<i class="fas fa-bars"></i>'; // Change to menu icon
            }
        });

        // Hide breadcrumb popup when clicking outside
        document.addEventListener('click', (event) => {
            if (!breadcrumbPopup.contains(event.target) && !button.contains(event.target)) {
                breadcrumbPopup.style.display = 'none';
                button.innerHTML = '<i class="fas fa-bars"></i>'; // Revert to menu icon
            }
        });
    };

    // Load Font Awesome if not already included
    const loadFontAwesome = () => {
        if (!document.querySelector('link[href*="font-awesome"]')) {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css';
            document.head.appendChild(link);
        }
    };

    loadFontAwesome();
    createBreadcrumbs();
});
