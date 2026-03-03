// 步驟 1: 選取按鈕
const adventureButton = document.querySelector('.wood-button');

// 步驟 2: 監聽點擊事件
adventureButton.addEventListener('click', function() {
    
    // 步驟 3: 執行跳轉
    console.log("按鈕被點擊了，準備跳轉！"); // 先留一句話，方便我們在控制台追蹤
    
    window.location.href = 'map.html';
});






