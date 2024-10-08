document.addEventListener('DOMContentLoaded', () => {
    const employees = document.querySelectorAll('.employees');
    const leftArrows = document.querySelectorAll('.left-arrow');
    const rightArrows = document.querySelectorAll('.right-arrow');
    let currentSlide = 0;

    function showSlide(index, direction) {
        employees.forEach((slide, i) => {
            slide.classList.remove('active');
            if (direction === 'next') {
                slide.style.transform = i < index ? 'translateX(100%)' : (i > index ? 'translateX(100%)' : 'translateX(0)');
            } else if (direction === 'prev') {
                slide.style.transform = i > index ? 'translateX(100%)' : (i < index ? 'translateX(100%)' : 'translateX(0)');
            }
        });
        employees[index].classList.add('active');
        employees[index].style.transform = 'translateX(0)';
    }

    function nextSlide() {
        const nextIndex = (currentSlide + 1) % employees.length;
        showSlide(nextIndex, 'next');
        currentSlide = nextIndex;
    }

    function prevSlide() {
        const prevIndex = (currentSlide - 1 + employees.length) % employees.length;
        showSlide(prevIndex, 'prev');
        currentSlide = prevIndex;
    }

    leftArrows.forEach(arrow => arrow.addEventListener('click', prevSlide));
    rightArrows.forEach(arrow => arrow.addEventListener('click', nextSlide));

    showSlide(currentSlide, 'next');
});

document.addEventListener('DOMContentLoaded', () => {
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.close');

    function openModal(modalId) {
        const modal = document.getElementById(modalId);
        modal.style.display = 'block';
    }

    function closeModal(modal) {
        modal.style.display = 'none';
    }

    closeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const modal = button.closest('.modal');
            closeModal(modal);
        });
    });

    window.addEventListener('click', (event) => {
        modals.forEach(modal => {
            if (event.target == modal) {
                closeModal(modal);
            }
        });
    });

    document.getElementById('openApplicationModalButton').addEventListener('click', () => {
        openModal('applicationModal');
    });

    document.getElementById('applicationForm').addEventListener('submit', function(event) {
        event.preventDefault();
        closeModal(document.getElementById('applicationModal'));
        openModal('myModal');
    });

    document.getElementById('backToHome').addEventListener('click', function() {
        closeModal(document.getElementById('myModal'));
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const fileInput = document.getElementById('resume');
    const customFileUpload = document.querySelector('.custom-file-upload');

    customFileUpload.addEventListener('click', () => {
        fileInput.click();
    });

    fileInput.addEventListener('change', () => {
        if (fileInput.files.length > 0) {
            customFileUpload.textContent = fileInput.files[0].name;
        } else {
            customFileUpload.textContent = 'Загрузить файл';
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let horizontalScroll = document.querySelector('.container');
    let leftBtn = document.getElementById('leftBtn');
    let rightBtn = document.getElementById('rightBtn');
    let bathsBtn = document.getElementById('bathsBtn');
    let housesBtn = document.getElementById('housesBtn');
    let dots = document.querySelectorAll('.dot');
    let currentSet = 'baths';
    let currentIndex = 0;

    function switchGallery(index) {
        const galleries = document.querySelectorAll(`.slidergallery.${currentSet}`);
        galleries.forEach((gallery, i) => {
            if (i === index) {
                gallery.style.display = 'flex';
            } else {
                gallery.style.display = 'none';
            }
        });

        updateDots(index);
    }

    function updateDots(index) {
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    rightBtn.addEventListener('click', () => {
        const totalGalleries = document.querySelectorAll(`.slidergallery.${currentSet}`).length;
        currentIndex = (currentIndex + 1) % totalGalleries;
        switchGallery(currentIndex);
    });

    leftBtn.addEventListener('click', () => {
        const totalGalleries = document.querySelectorAll(`.slidergallery.${currentSet}`).length;
        currentIndex = (currentIndex - 1 + totalGalleries) % totalGalleries;
        switchGallery(currentIndex);
    });

    bathsBtn.addEventListener('click', () => {
        currentSet = 'baths';
        currentIndex = 0;
        switchGallery(currentIndex);
        bathsBtn.classList.add('active');
        housesBtn.classList.remove('active');
    });

    housesBtn.addEventListener('click', () => {
        currentSet = 'houses';
        currentIndex = 0;
        switchGallery(currentIndex);
        housesBtn.classList.add('active');
        bathsBtn.classList.remove('active');
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            switchGallery(index);
        });
    });

    window.addEventListener('resize', () => {
        const totalGalleries = document.querySelectorAll(`.slidergallery.${currentSet}`).length;
        currentIndex = Math.min(currentIndex, totalGalleries - 1);
        switchGallery(currentIndex);
    });

    switchGallery(currentIndex);

    const galleries = document.querySelectorAll('.slidergallery');
    galleries.forEach(gallery => {
        gallery.style.transition = 'transform 0.5s ease';
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const plusIcons = document.querySelectorAll('.plusIcon');

    plusIcons.forEach(plusIcon => {
        plusIcon.addEventListener('click', () => {
            const professionSecondTextpart = plusIcon.parentElement.nextElementSibling;
            professionSecondTextpart.classList.toggle('show');
            plusIcon.classList.toggle('expanded');
        });
    });
});
