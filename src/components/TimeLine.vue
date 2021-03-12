<template class="container-timeline">
    <div id="timeline">
		<div class="timeline-item">
			<div class="timeline-icon">
			</div>
			<div class="timeline-content">
				<h2>LOREM IPSUM DOLOR</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
				</p>
			</div>
		</div>
        <div class="timeline-item">
			<div class="timeline-icon">
			</div>
			<div class="timeline-content">
				<h2>LOREM IPSUM DOLOR</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
					Atque, facilis quo maiores magnam modi ab libero praesentium blanditiis.
				</p>
			</div>
		</div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
    #timeline {
        width: 100%;
        margin: 30px auto;
        position: relative;
        padding: 0 10px;
        transition: all .4s ease;
    }

    #timeline::before {
        content:"";
		width: 3px;
		height: 100%;
		background: red;
		left: 50%;
		top: 0;
		position: absolute;
    }

    #timeline::after {
        content: "";
		clear: both;
		display: table;
		width: 100%;
    }

    .timeline-item {
        margin-bottom: 50px;
		position: relative;
    }

    .timeline-item .timeline-icon {
        background: red;
		width: 50px;
		height: 50px;
		position: absolute;
		top: 0;
		left: 50%;
		overflow: hidden;
        margin-left: -23px;
        border-radius: 50%
    }

    .timeline-content {
		width: 45%;
		background: #fff;
		padding: 20px;
		box-shadow: 0 3px 0 rgba(0,0,0,0.1);
		border-radius: 5px;
		transition: all .3s ease;
    }

    .timeline-content h2 {
		padding: 15px;
		background: red;
		color: #fff;
		margin: -20px -20px 0 -20px;
		font-weight: 300;
		border-radius: 3px 3px 0 0;
    }

    .timeline-content::before {
        content: '';
		position: absolute;
		left: 45%;
		top: 20px;
		width: 0; 
		height: 0; 
		border-top: 7px solid transparent;
		border-bottom: 7px solid transparent; 
		border-left:7px solid red; 
    }

    .timeline-content.right {
        float: right;
    }

    .timeline-content.right::before {
        content: '';
		right: 45%;
		left: inherit;
		border-left: 0;
		border-right: 7px solid red;
    }

    @media screen and (max-width: 768px) {
        #timeline {
            margin: 30px;
            padding: 0px;
            width: 90%;
        }
        
        #timeline::before {
			left: 0;
        }
		
		.timeline-item .timeline-content {
			width: 90%;
			float: right;
        }
            
        .timeline-item .timeline-content::before {
            left: 10%;
			margin-left: -6px;
			border-left: 0;
			border-right: 7px solid red;
        }
        .timeline-item .timeline-content::after {
            left: 10%;
			margin-left: -6px;
			border-left: 0;
			border-right: 7px solid red;
        }

		.timeline-icon {
			left: 0;
		}
	}

</style>

