const canvas = document.getElementById('myCanvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.src = 'model/room.jpg';
        
        let startX, startY, isDrawing = false;
        let textureImage = null;

        img.onload = () => {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        };

        canvas.addEventListener('mousedown', (event) => {
            const rect = canvas.getBoundingClientRect();
            startX = event.clientX - rect.left;
            startY = event.clientY - rect.top;
            isDrawing = true;
        });

        canvas.addEventListener('mousemove', (event) => {
            if (isDrawing) {
                const rect = canvas.getBoundingClientRect();
                const x = event.clientX - rect.left;
                const y = event.clientY - rect.top;
                drawSelectionRect(startX, startY, x - startX, y - startY);
            }
        });

        canvas.addEventListener('mouseup', (event) => {
            isDrawing = false;
            const rect = canvas.getBoundingClientRect();
            const endX = event.clientX - rect.left;
            const endY = event.clientY - rect.top;
            applyTexture(startX, startY, endX - startX, endY - startY);
        });

        document.getElementById('textureInput').addEventListener('change', (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    textureImage = new Image();
                    textureImage.src = e.target.result;
                };
                reader.readAsDataURL(file);
            }
        });

        function drawSelectionRect(x, y, w, h) {
            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
            ctx.strokeStyle = 'red';
            ctx.lineWidth = 2;
            ctx.strokeRect(x, y, w, h);
        }

        function applyTexture(x, y, w, h) {
            if (textureImage) {
                textureImage.onload = () => {
                    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                    ctx.drawImage(textureImage, x, y, w, h);
                };
            }
        }