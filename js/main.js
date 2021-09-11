function toggleMenu(){
    const toggle = document.querySelector('.toggle');
    const glass = document.querySelector('.glass');
    const logo = document.querySelector('.logo');
    const centralContent = document.querySelector('.centralContent')
    const social = document.querySelector('.social');
    const navigation = document.querySelector('.navigation');
    
    toggle.classList.toggle('active');
    glass.classList.toggle('active');
    logo.classList.toggle('active');
    centralContent.classList.toggle('active')
    social.classList.toggle('active')
    navigation.classList.toggle('active')
}