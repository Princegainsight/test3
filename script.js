

<script>
        document.getElementById('login-form').addEventListener('submit', function(event) {
            event.preventDefault();

            const users = [
                { name: 'Prince', email: 'prince@gmail.com', id: 'prince1234', password: '1234' },
                { name: 'Ayush', email: 'ayush@gmail.com', id: 'ayush1234', password: '1234' },
                { name: 'Raghu', email: 'raghu@gmail.com', id: 'raghu1234', password: '1234' }
            ];
            
            const userId = document.getElementById('user-id').value;
            const password = document.getElementById('password').value;

            const user = users.find(user => user.id === userId && user.password === password);

            if (user) {
                localStorage.setItem('loggedInUser', JSON.stringify({
                    name: user.name,
                    email: user.email,
                    id: user.id
                }));
                window.location.href = 'welcome.html';
            } else {
                alert('Invalid user ID or password');
            }
        });
    </script>
