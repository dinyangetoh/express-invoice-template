var invoiceItems = new Vue({
    el: '#invoice',
    data: {
        items: [{
            name: 'Web Design',
            description: "An affordable website solution that provides everything a company needs for a professional online presence",
            quantity: 2,
            unit_price: 599,
        }, {
            name: 'E-Book Design',
            description: "E-Book design which includes interface designing character design, deployment and upload on the server",
            quantity: 1,
            unit_price: 390,
        }, {
            name: 'Hosting Plan',
            description: "One year hostinig plan which includes 2 free email addresses. Free live support",
            quantity: 1,
            unit_price: 114,
        }, {
            name: 'Brochure Design',
            description: "Brochure design in Green and red color for international Film Festival New York November 2012",
            quantity: 3,
            unit_price: 200,
        }]
    },
    methods: {
        formatNumber(number) {
            return parseFloat(number).toFixed(2);
        }
    },
    computed: {
        totalAmount: function() {
            if (!this.items) {
                return 0;
            }
            return this.items.reduce(function(total, item) {
                return total + Number(item.unit_price * item.quantity);
            }, 0);
        },
        vat: function() {
            if (!this.items) {
                return 0;
            }
            return this.totalAmount * 0.2;
        },
        discount: function() {
            if (!this.items) {
                return 0;
            }
            return this.totalAmount * 0.06;
        },
        total: function() {
            if (!this.items) {
                return 0;
            }
            var ntotal = this.totalAmount;
            return (this.vat - this.discount) + ntotal;
        },
    }
});