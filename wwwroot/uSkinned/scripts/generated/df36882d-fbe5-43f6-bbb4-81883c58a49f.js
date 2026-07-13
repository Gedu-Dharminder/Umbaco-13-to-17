// let originallyActive = document.querySelector('nav > ul > li.active');
// let originallyOpen = document.querySelector('nav > ul > li.open-child_mobile');

// document.querySelectorAll('nav > ul > li.has-child').forEach(list => {
//   list.addEventListener('mouseover', () => {
//     // Remove all active/open classes
//     document.querySelectorAll('nav > ul > li').forEach(li => {
//       li.classList.remove('active', 'open-child_mobile');
//     });

//     // Add bottom-border ONLY to the original active one
//     if (originallyActive) {
//       originallyActive.classList.add('bottom-border');
//     }
//   });

//   list.addEventListener('mouseleave', () => {
//     // Restore original active/open
//     if (originallyActive) {
//       originallyActive.classList.add('active');
//       originallyActive.classList.remove('bottom-border');
//     }
//     if (originallyOpen) {
//       originallyOpen.classList.add('open-child_mobile');
//     }
//   });

//   list.addEventListener('click', () => {
//     // Update the original references on click
//     document.querySelectorAll('nav > ul > li').forEach(li => {
//       li.classList.remove('active', 'open-child_mobile', 'bottom-border');
//     });

//     list.classList.add('active', 'open-child_mobile');
//     originallyActive = list;
//     originallyOpen = list;
//   });
// });



// document.addEventListener('DOMContentLoaded', () => {
//   const navItems = document.querySelectorAll('#site-header nav > ul > li');

//   // Reset classes & set second item active
// //   navItems.forEach((li, index) => {
// //     li.classList.remove('active', 'open-child_mobile', 'bottom-border');
// //     if (index === 1) {
// //       li.classList.add('active', 'open-child_mobile', 'bottom-border');
// //     }
// //   });

//   navItems.forEach(li => {
//     const topLink = li.querySelector(':scope > span > a'); // direct child a
//     if (!topLink) return;

//     topLink.addEventListener('click', (e) => {
//       // Ignore if text is "arrow"
//       if (topLink.textContent.trim().toLowerCase() === 'arrow') return;

//       e.preventDefault(); // stop navigation for top-level links

//       // Remove active classes from all
//       navItems.forEach(item => {
//         item.classList.remove('active', 'open-child_mobile', 'bottom-border');
//       });

//       // Add active classes to clicked item
//       li.classList.add('open-child_mobile', 'bottom-border');
//     });
//   });
// });

document.addEventListener('DOMContentLoaded', () => {
  const navItems = document.querySelectorAll('#site-header nav > ul > li');

  // Check if none of the navItems have 'active', 'open-child_mobile', or 'bottom-border'
  const noActiveItems = Array.from(navItems).every(item => 
    !item.classList.contains('active') && 
    !item.classList.contains('open-child_mobile') && 
    !item.classList.contains('bottom-border')
  );

  // If no navItems have the specified classes, add them to the first navItem
  if (noActiveItems && navItems.length > 0) {
    navItems[1].classList.add('active', 'open-child_mobile', 'bottom-border');
  }

  navItems.forEach(li => {
    const topLink = li.querySelector(':scope > span > a'); // direct child a
    if (!topLink) return;

    topLink.addEventListener('click', (e) => {
      // Ignore if text is "arrow"
      if (topLink.textContent.trim().toLowerCase() === 'arrow') return;

      e.preventDefault(); // stop navigation for top-level links

      // Remove active classes from all
      navItems.forEach(item => {
        item.classList.remove('active', 'open-child_mobile', 'bottom-border');
      });

      // Add active classes to clicked item
      li.classList.add('open-child_mobile', 'bottom-border');
    });
  });
});






function initDesktopMenu (){
const subItems = document.querySelectorAll('nav > ul > li > ul > li');

if(window.innerWidth >= 992){

    if (subItems.length > 0) {
      subItems[0].classList.add('arrow');
    }
    subItems.forEach(list => {
        list.addEventListener('click', (e) => {
             e.stopPropagation();
        })
      list.addEventListener('mouseenter', () => {
        // Remove 'arrow' from all
        subItems.forEach(li => li.classList.remove('arrow'));
    
        // Add 'arrow' to hovered one
        list.classList.add('arrow');
      });
    });
}else{
    subItems.forEach(list =>{
        list.addEventListener('click', (e) => {
             e.stopPropagation();
        })
    })
}
}
initDesktopMenu();
document.addEventListener('DOMContentLoaded', initDesktopMenu);

// Run on resize
window.addEventListener('resize', initDesktopMenu);




 const logoImg = document.querySelector("#logo img");

  function updateLogo() {
      if (!logoImg) return;
    if (window.innerWidth <= 992) {
      // Mobile image
      logoImg.src = "/media/po5hmknm/qe-dubai-sports-city_landscape_light_rgb.svg";
    } else {
      // Desktop image
      logoImg.src = "/media/e24hnipm/qe-dubai-sports-city_portrait_light_rgb.svg";
    }
  }


  // Run on window resize
  document.addEventListener('DOMContentLoaded', updateLogo);
  window.addEventListener("resize", updateLogo);



// document.addEventListener("DOMContentLoaded", () => {
//     const headings = document.querySelectorAll(".link-tab .heading");
//     const components = document.querySelectorAll(".link-tab .component-main");
//     headings.forEach(tab => {
//         tab.addEventListener("click", () => {
//             headings.forEach(heading => heading.classList.remove("show"));
//             components.forEach(component => component.classList.remove("show"));
//             tab.classList.add("show");
//             const nextComponent = tab.nextElementSibling;
//             if (nextComponent && nextComponent.classList.contains("component-main")) {
//                 nextComponent.classList.add("show");
//             }
//         });
//     });
//     // if (headings.length > 0) {
//     //     headings[0].classList.add("show");
//     //     if (components.length > 0) {
//     //         components[0].classList.add("show");
//     //     }
//     // }
// });

document.addEventListener("DOMContentLoaded", () => {
    const headings = document.querySelectorAll(".link-tab .heading");
    const components = document.querySelectorAll(".link-tab .component-main");

    headings.forEach(tab => {
        tab.addEventListener("click", () => {
            const isAlreadyOpen = tab.classList.contains("show");

            // First, close all
            headings.forEach(heading => heading.classList.remove("show"));
            components.forEach(component => component.classList.remove("show"));

            // If it wasn't open, open it now
            if (!isAlreadyOpen) {
                tab.classList.add("show");
                const nextComponent = tab.nextElementSibling;
                if (nextComponent && nextComponent.classList.contains("component-main")) {
                    nextComponent.classList.add("show");
                }
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtns = document.querySelectorAll(".readmorefunction");
    const hideimage = document.querySelector(".rotate-image")
    readMoreBtns.forEach(btn => {
        
        const originalText = btn.textContent.trim(); // store starting label
        const lessText = originalText.replace(/more/i, "less"); // auto-generate "less" version

        btn.addEventListener("click", () => {
            const content = btn.closest("p").previousElementSibling; 
            const isShown = content.classList.contains("show");

            content.classList.toggle("show");
            if(hideimage){
            hideimage.classList.toggle("show");
            }
            btn.textContent = isShown ? originalText : lessText;
        });
    });
});


// back to top button js

const backToTopContainer = document.querySelector('.usn_back-to-top');
const footer = document.querySelector('footer'); // adjust selector if needed

// Observer to detect when footer enters viewport
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            backToTopContainer.classList.add('footer-visible');
        } else {
            backToTopContainer.classList.remove('footer-visible');
        }
    });
}, { threshold: 0 });

observer.observe(footer);

// custom populare sreach link

document.addEventListener('DOMContentLoaded', () => {
  const submitButton = document.querySelector('.site-search-form form button[type="submit"]');
  if (!submitButton) return; 
  const heading = document.createElement('h3');
  heading.textContent = 'Popular searches';
  const ul = document.createElement('ul');
  const links = [
    { href: '/search/?search_field=Admissions', text: 'Admissions' },
    { href: '/search/?search_field=Visit+Campus', text: 'Visit campus' },
    { href: '/search/?search_field=Sports', text: 'Sports' },
    { href: '/search/?search_field=Facilities', text: 'Facilities' },
    { href: '/search/?search_field=Curriculum', text: 'Curriculum' },
    { href: '/search/?search_field=Fees', text: 'Fees' },
    { href: '/search/?search_field=FAQs', text: 'FAQ' },
  ];
  links.forEach(link => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = link.href;
    a.textContent = link.text;
    li.appendChild(a);
    ul.appendChild(li);
  });
  submitButton.insertAdjacentElement('afterend', heading);
  heading.insertAdjacentElement('afterend', ul);
});










