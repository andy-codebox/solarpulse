// import { AfterViewInit, Component } from '@angular/core';
// import gsap from 'gsap';
// import { ScrollTrigger } from 'gsap/all';

// gsap.registerPlugin(ScrollTrigger);
// @Component({
//   selector: 'app-fourth-section',
//   standalone: true,
//   imports: [],
//   templateUrl: './fourth-section.component.html',
//   styleUrl: './fourth-section.component.scss'
// })

// export class FourthSectionComponent implements AfterViewInit {
//   ngAfterViewInit(): void {

//     // let tl = gsap.timeline({
//     //   scrollTrigger: {
//     //     trigger: ".sub-section-container",
//     //     pin: true,
//     //     start: "top +=150",
//     //     end: "top -=400",
//     //     scrub: true,
//     //     markers: true
//     //   }
//     // })

//     const handleMediaQuery = () => {
//       const mediaQuery1000 = window.matchMedia("(max-width: 1000px)");
//       const mediaQuery850 = window.matchMedia("(max-width: 850px)");

//       if (mediaQuery1000.matches || mediaQuery850.matches) {return}
//       else{
//         ScrollTrigger.create({
//           trigger: ".trigger",
//           pin: ".sub-section-container",
//           start: "top top",
//           end: "bottom bottom",
//           // scrub: true,
//           pinSpacing: false,
//           markers: true
//         })
//         // ===== might use later
//         // let title = document.querySelector(".fourth-section-title");
//         // gsap.set(title, { opacity: 0 })


//         // let titletl = gsap.timeline({
//         //   scrollTrigger: {
//         //     trigger: ".trigger",
//         //     start: () => `top +=70%`,
//         //     end: () => `top top-=10%`,
//         //     scrub: true,
//         //     markers: true
//         //   }
//         // })
//         // titletl.to(title, { opacity: 1 })
//           // .to(title, { opacity: 0 })

//         // gsap.to(title, {
//         //   scrollTrigger: {
//         //     trigger: ".trigger",
//         //     start: "top +=60%",
//         //     end: "top top",
//         //     scrub: true,
//         //     markers: true
//         //   },
//         //   opacity: 1
//         // })

//         let images = gsap.utils.toArray(".image-container") as HTMLElement[];
//         let texts = gsap.utils.toArray(".info-section") as HTMLElement[];
//         gsap.set(images, { opacity: 0, y: 50 });
//         gsap.set(texts, { opacity: 0, y: 50 });

//         images.forEach((image, i) => {
//           let tl = gsap.timeline({
//             scrollTrigger: {
//               trigger: ".trigger",
//               start: () => `top+=${i * window.innerHeight} top`,
//               end: () => `top+=${(i + 1) * window.innerHeight} top`,
//               scrub: true,
//               markers: true
//             }
//           });

//           tl.to(image, { opacity: 1, y: 0 }, "+=0")
//             .to(texts[i], { opacity: 1, y: 0 }, "+=0")
//             .to([image, texts[i]], { opacity: 0, y: -50 }, "+=1")
//         });
//       }
//     }

//     handleMediaQuery();

//     window.addEventListener("resize", handleMediaQuery);

//     // texts.forEach((text, i) => {
//     //   let tl = gsap.timeline({
//     //     scrollTrigger: {
//     //       trigger: ".trigger",
//     //       start: () => `top+=${i * window.innerHeight} top`,
//     //       end: () => `top+=${(i + 1) * window.innerHeight} top`,
//     //       scrub: true,
//     //       markers: true
//     //     }
//     //   });

//     //   tl.to(text, {
//     //     opacity: 1,
//     //   }).to(text, { opacity: 0 })
//     // });


//     // let sections = gsap.utils.toArray(".sub-section") as HTMLElement[];
//     // gsap.set(sections, { opacity: 0 })

//     // sections.forEach((section, i) => {
//     //   let tl = gsap.timeline({
//     //     scrollTrigger: {
//     //       trigger: ".trigger",
//     //       start: () => `top+=${i * window.innerHeight} top`,
//     //       end: () => `top+=${(i + 1) * window.innerHeight} top`,
//     //       scrub: true,
//     //       markers: true
//     //     }
//     //   });

//     //   tl.to(section, {
//     //     opacity: 1,
//     //   }).to(section, { opacity: 0 })
//     // });

//     //   let images = gsap.utils.toArray(".image-container") as HTMLElement[];
//     //   gsap.set(images, { y: 100, opacity: 0 });
//     //   let texts = gsap.utils.toArray(".info-section") as HTMLElement[];
//     //   gsap.set(texts, { y: 100, opacity: 0 });
//     //   let sections = document.querySelectorAll(".sub-section");

//     //   sections.forEach(section => {
//     // images.forEach((image: HTMLElement) => {

//     //   let tl = gsap.timeline({
//     //     scrollTrigger: {
//     //       trigger: section,
//     //       start: "top 10%",
//     //       end: "top -180%",
//     //       scrub: true,
//     //       markers: true
//     //     }
//     //   });

//     //   tl.to(image, {
//     //     opacity: 1,
//     //     y: 0
//     //   }).to(image, { y: -100, opacity: 0 })
//     // });



//     //   texts.forEach((text: HTMLElement) => {

//     //     let tl = gsap.timeline({
//     //       scrollTrigger: {
//     //         trigger: section,
//     //         start: "top 0%",
//     //         end: "top -180%",
//     //         scrub: true,
//     //         markers: true
//     //       }
//     //     });

//     //     tl.to(text, {
//     //       opacity: 1,
//     //       y: 0
//     //     }).to(text, { y: -100, opacity: 0 })
//     //   });

//     // })

//     //   console.log(images);
//     //   console.log("test");
//   }


// }

import { AfterViewInit, Component, OnDestroy } from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-fourth-section',
  standalone: true,
  imports: [],
  templateUrl: './fourth-section.component.html',
  styleUrl: './fourth-section.component.scss'
})

export class FourthSectionComponent implements AfterViewInit, OnDestroy {

  private resizeHandler: (() => void) | undefined = undefined;

  ngAfterViewInit(): void {

    const handleMediaQuery = () => {
      const mediaQuery1000 = window.matchMedia("(max-width: 1000px)");
      const mediaQuery850 = window.matchMedia("(max-width: 850px)");

      // Remove animations for small screens
      if (mediaQuery1000.matches || mediaQuery850.matches) {
        ScrollTrigger.getAll().forEach(trigger => trigger.kill());

        // Apply any layout changes or styles specific to smaller screens here
        document.querySelectorAll('.image-container, .info-section').forEach(el => {
          el.setAttribute('style', 'opacity: 1; transform: translateY(0);'); // Reset styles for small screens
        });

        return;
      } else {
        // Refresh ScrollTrigger to ensure the correct states on resize
        ScrollTrigger.refresh();

        ScrollTrigger.create({
          trigger: ".trigger",
          pin: ".sub-section-container",
          start: "top top",
          end: "bottom bottom",
          pinSpacing: false,
          markers: false
        });

        let images = gsap.utils.toArray(".image-container") as HTMLElement[];
        let texts = gsap.utils.toArray(".info-section") as HTMLElement[];

        gsap.set(images, { opacity: 0, y: 50 });
        gsap.set(texts, { opacity: 0, y: 50 });

        // Ensure animation for each section
        images.forEach((image, i) => {
          let tl = gsap.timeline({
            scrollTrigger: {
              trigger: ".trigger",
              start: () => `top+=${i * window.innerHeight} 35%`,
              end: () => `top+=${(i + 1) * window.innerHeight} top`,
              scrub: true,
              // markers: true
            }
          });

          tl.to(image, { opacity: 1, y: 0 }, "+=0")
            .to(texts[i], { opacity: 1, y: 0 }, "+=0")
            .to([image, texts[i]], { opacity: 0, y: -50 }, "+=1")
        });
      }
    };

    // Call handleMediaQuery to handle animations based on screen size
    handleMediaQuery();

    // Listen to resize events
    this.resizeHandler = () => {
      ScrollTrigger.refresh();  // Refresh ScrollTrigger
      handleMediaQuery();       // Re-evaluate media queries and animations
    };

    window.addEventListener("resize", this.resizeHandler);
  }

  ngOnDestroy(): void {
    // Clean up event listeners and ScrollTrigger instances on component destruction
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }
}
