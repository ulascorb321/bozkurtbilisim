// Mevcut JavaScript (js.txt)
    const isScrolling = () => {
        const headerEl = document.querySelector('.primary-header')
        let windowPosition = window.scrollY > 100;
        headerEl.classList.toggle('active', windowPosition)
    }

    window.addEventListener('scroll', isScrolling);

    const sliders = [...document.querySelectorAll(".slider__container")];
    const sliderControlPrev = [...document.querySelectorAll(".slider__control.prev")];
    const sliderControlNext = [...document.querySelectorAll(".slider__control.next")];

    sliders.forEach((slider, i) => {
        let isDragStart = false,
            isDragging = false,
            isSlide = false,
            prevPageX,
            prevScrollLeft,
            positionDiff,
            autoSlideInterval;

        const sliderItem = slider.querySelector(".slider__item");
        var isMultislide = (slider.dataset.multislide === 'true');

        sliderControlPrev[i].addEventListener('click', () => {
            if (isSlide) return;
            isSlide = true;
            let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
            slider.scrollLeft += -slideWidth;
            setTimeout(function () { isSlide = false; }, 700);
            resetAutoSlide();
        });

        sliderControlNext[i].addEventListener('click', () => {
            if (isSlide) return;
            isSlide = true;
            let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
            slider.scrollLeft += slideWidth;
            setTimeout(function () { isSlide = false; }, 700);
            resetAutoSlide();
        });

        function autoSlide() {
            if (slider.scrollLeft - (slider.scrollWidth - slider.clientWidth) > -1 || slider.scrollLeft <= 0) return;
            positionDiff = Math.abs(positionDiff);
            let slideWidth = isMultislide ? slider.clientWidth : sliderItem.clientWidth;
            let valDifference = slideWidth - positionDiff;
            if (slider.scrollLeft > prevScrollLeft) {
                return slider.scrollLeft += positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
            }
            slider.scrollLeft -= positionDiff > slideWidth / 5 ? valDifference : -positionDiff;
        }

        function dragStart(e) {
            if (isSlide) return;
            isSlide = true;
            isDragStart = true;
            prevPageX = e.pageX || e.touches[0].pageX;
            prevScrollLeft = slider.scrollLeft;
            if (slider.closest('.full-screen-slider')) {
                clearInterval(autoSlideInterval); // Sürükleme başladığında durdur
            }
            setTimeout(function () { isSlide = false; }, 700);
        }

        function dragging(e) {
            if (!isDragStart) return;
            e.preventDefault();
            isDragging = true;
            slider.classList.add("dragging");
            positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
            slider.scrollLeft = prevScrollLeft - positionDiff;
        }

        function dragStop() {
            isDragStart = false;
            slider.classList.remove("dragging");
            if (!isDragging) return;
            isDragging = false;
            autoSlide();
            resetAutoSlide(); // Sürükleme bittiğinde yeniden başlat
        }

        addEventListener("resize", autoSlide);
        slider.addEventListener("mousedown", dragStart);
        slider.addEventListener("touchstart", dragStart);
        slider.addEventListener("mousemove", dragging);
        slider.addEventListener("touchmove", dragging);
        slider.addEventListener("mouseup", dragStop);
        slider.addEventListener("touchend", dragStop);
        slider.addEventListener("mouseleave", dragStop);
    });

    var quadimages = document.querySelectorAll("#quad figure");
    for (i = 0; i < quadimages.length; i++) {
        quadimages[i].addEventListener('click', function () { this.classList.toggle("expanded"); quad.classList.toggle("full") });
    }

    document.querySelectorAll('.feature-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(1.05)';
            setTimeout(() => {
                card.style.transform = 'translateY(-10px)';
            }, 200);
        });
    });

    // Intersection Observer ile görünüm animasyonu
    document.addEventListener('DOMContentLoaded', () => {
        const section = document.querySelector('.photo-cards-section');
        const cards = document.querySelectorAll('.photo-card-wrapper');
        const titles = document.querySelectorAll('.photo-card-title');
        const sectionTitle = document.querySelector('.section-title');
        const moreButton = document.querySelector('.more-button');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    sectionTitle.classList.add('visible');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('visible');
                            titles[index].classList.add('visible');
                        }, index * 200);
                    });
                    setTimeout(() => {
                        moreButton.classList.add('visible');
                    }, cards.length * 200);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        observer.observe(section);

        document.querySelectorAll('.photo-card').forEach(card => {
            card.addEventListener('click', () => {
                card.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    card.style.transform = 'scale(1.05)';
                    setTimeout(() => {
                        card.style.transform = 'scale(1)';
                    }, 100);
                }, 100);
            });
        });

        moreButton.addEventListener('click', () => {
            moreButton.style.transform = 'scale(0.95)';
            setTimeout(() => {
                moreButton.style.transform = 'scale(1.05)';
                setTimeout(() => {
                    moreButton.style.transform = 'scale(1)';
                }, 100);
            }, 100);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const elements = document.querySelectorAll('.animate-on-scroll');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2
        });

        elements.forEach(element => {
            observer.observe(element);
        });
    });

    document.addEventListener('DOMContentLoaded', () => {
        const logo = document.querySelector('.hero-content img');
        const text = document.querySelector('.hero-content h1');
setTimeout(() => {
logo.classList.add('animate-in');
text.classList.add('animate-in');
}, 100);
});

// yükleniyor ekranı başlangıç
        window.addEventListener('load', function() {
            const loader = document.getElementById('loader');
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 500); // 500ms gecikme (isteğe bağlı, animasyon için)
        });

//yükleniyor ekranı bitiş

//yedekleme ekranı başlangıç
const items = document.querySelectorAll('.feature-item');
  const image = document.getElementById('featureImage');

  items.forEach(item => {
    item.addEventListener('click', () => {
      items.forEach(i => i.classList.remove('active'));
      item.classList.add('active');
      const newImage = item.getAttribute('data-image');
      image.style.opacity = 0;
      setTimeout(() => {
        image.src = newImage;
        image.style.opacity = 1;
      }, 300);
    });
  });
//yedekleme ekranı bitiş

//ana sayfa slider başlangıç

const slides = ['slide1', 'slide2', 'slide3', 'slide4', 'slide5', 'slide6'];
        let current = 0;

        // Tüm slideleri başta gizle
        slides.forEach(id => {
            document.getElementById(id).style.opacity = '0';
        });

        // İlk slide'ı göster
        document.getElementById('slide1').style.opacity = '1';

        function nextSlide() {
            document.getElementById(slides[current]).style.opacity = '0';
            current = (current + 1) % slides.length;
            document.getElementById(slides[current]).style.opacity = '1';
        }

        setInterval(nextSlide, 3000);

//ana sayfa slider bitiş