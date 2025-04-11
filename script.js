document.getElementById('calculate').addEventListener('click', function() {
    // الحصول على القيم المدخلة
    const days = parseInt(document.getElementById('days').value) || 0;
    const hours = parseInt(document.getElementById('hours').value) || 0;
    const minutes = parseInt(document.getElementById('minutes').value) || 0;
    
    // حساب التاريخ المستقبلي
    const now = new Date();
    const futureDate = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + days,
        now.getHours() + hours,
        now.getMinutes() + minutes
    );
    
    // تنسيق التاريخ للعرض
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
    };
    
    const formattedDate = futureDate.toLocaleDateString('ar-EG', options);
    
    // عرض النتيجة
    document.getElementById('output').innerHTML = `
        سيصبح الموعد بعد:<br>
        ${days} يوم، ${hours} ساعة، ${minutes} دقيقة<br><br>
        التاريخ والوقت المستقبلي:<br>
        <strong>${formattedDate}</strong>
    `;
    
    document.getElementById('result').style.display = 'block';
});
