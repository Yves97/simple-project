<template>
    <div>
        <h2>Contact Us</h2>
        <slot name="top"></slot>
        <form action="">
            <div class="form-group">
                <label for="yourName">Your name</label>
                <input type="text" name="" id="yourName" class="form-control" placeholder="enter your name">
            </div>
            <div class="form-group">
                <label for="yourEmail">Your email</label>
                <input type="email" name="" id="yourEmail" class="form-control" placeholder="enter your email">
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea cols="30" name="" id="message" rows="10" class="form-control" placeholder="your message here"></textarea>
            </div>
            <slot name="bottom"></slot>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</template>

<script>
export default {
    
}
</script>